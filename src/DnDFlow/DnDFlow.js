import React, { useRef, useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "../index.css";

import ResizableNodeSelected from "./shapesG/NodeSelected";
import RectangleNode from "./shapesG/RectangleNode";
import RounderRec from "./shapesG/RounderRecNode";
import EllipseNode from "./shapesG/EllipsNode";
import SquareNode from "./shapesG/SquareNode";
import CircleNode from "./shapesG/CircleNode";
import DiamondNode from "./shapesG/DiamondNode";
import ParaNode from "./shapesG/ParaNode";
import HexaNode from "./shapesG/HexaNode";
import CloudNode from "./shapesG/CloudNode";
import StarNode from "./shapesG/StarNode";
import CylinderNode from "./shapesG/CylinderNode";
import DocumentNode from "./shapesG/DocumentNode";
import StepNode from "./shapesG/StepNode";
import TrapezoidNode from "./shapesG/TrapezoidNode";
import TapeNode from "./shapesG/TapeNode";
import NoteNode from "./shapesG/NoteNode";
import CardNode from "./shapesG/CardNode";
import CalloutNode from "./shapesG/CalloutNode";
import ActorNode from "./shapesG/ActorNode";
import DataNode from "./shapesG/DataNode";
import TriangleNode from "./shapesG/TriangleNode";
import axios from "axios";

const initialNodes = [];

let id = 0;
const getId = () => `ouss_${id++}`;

const getUniqueKey = (id) => `${id}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [selectedNodes, setSelectedNodes] = useState(new Set());

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));

      const { source, target } = params;

      const sourceKey = getUniqueKey(source);
      const sourceData = JSON.parse(localStorage.getItem(sourceKey)) || {};
      sourceData.edges = sourceData.edges || [];
      sourceData.edges.push({ target });
      localStorage.setItem(sourceKey, JSON.stringify(sourceData));

      const targetKey = getUniqueKey(target);
      const targetData = JSON.parse(localStorage.getItem(targetKey)) || {};
      targetData.edges = targetData.edges || [];
      targetData.edges.push({ source });
      localStorage.setItem(targetKey, JSON.stringify(targetData));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
          position,
        },
      };

      const uniqueKey = getUniqueKey(newNode.id);
      localStorage.setItem(
        uniqueKey,
        JSON.stringify({
          position,
          size: { width: 100, height: 100 },
          bgColor: "#ffffff",
          borderWidth: 2,
          borderColor: "#ff0071",
          textColor: "#000000",
          fontSize: 14,
          fontFamily: "Arial",
          isBold: false,
          isItalic: false,
          isUnderline: false,
          isStrikethrough: false,
          text: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
        })
      );

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const onNodeDragStop = useCallback((event, node) => {
    const uniqueKey = getUniqueKey(node.id);
    const existingData = localStorage.getItem(uniqueKey);

    if (existingData) {
      const parsedData = JSON.parse(existingData);
      localStorage.setItem(
        uniqueKey,
        JSON.stringify({
          ...parsedData, 
          position: node.position, // Update position
        })
      );
    }
  }, []);

  const removeFromLocalStorage = (id) => {
    const uniqueKey = getUniqueKey(id);
    localStorage.removeItem(uniqueKey);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Delete") {
        setNodes((nds) => {
          const remainingNodes = nds.filter(
            (node) => !selectedNodes.has(node.id)
          );

          selectedNodes.forEach((id) => removeFromLocalStorage(id));

          setSelectedNodes(new Set());
          return remainingNodes;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setNodes, selectedNodes]);

  const onSelectionChange = useCallback((elements) => {
    const selected = new Set(elements.nodes.map((node) => node.id));
    setSelectedNodes(selected);
  }, []);
  const fetchDataFromBackend = useCallback(() => {
    localStorage.clear();

    axios
      .get("http://127.0.0.1:8000/api/get-data")
      .then((response) => {
        const jsonData = response.data;
        console.log("Fetched data:", jsonData);
        const nodes = [];
        const edges = [];

        let maxId = 0;

        Object.keys(jsonData).forEach((key) => {
          const shapeData = JSON.parse(jsonData[key]);
          const nodeId = parseInt(key.split("_")[1]);
          if (nodeId > maxId) {
            maxId = nodeId;
          }

          const node = {
            id: key,
            data: {
              label: shapeData.text || "Node",
              bgcolor: shapeData.bgColor,
              width: shapeData.size?.width || 100,
              height: shapeData.size?.height || 100,
              borderColor: shapeData.borderColor,
              borderWidth: shapeData.borderWidth,
              textColor: shapeData.textColor,
              fontSize: shapeData.fontSize,
              fontFamily: shapeData.fontFamily,
              isBold: shapeData.isBold,
              isItalic: shapeData.isItalic,
              isUnderline: shapeData.isUnderline,
              isStrikethrough: shapeData.isStrikethrough,
              position: shapeData.position,
              edges: shapeData.edges,
              size: shapeData.size,
            },
            type:
              shapeData.type.charAt(0).toUpperCase() + shapeData.type.slice(1),
            position: shapeData.position || { x: 0, y: 0 },
          };
          nodes.push(node);

          if (shapeData.edges) {
            shapeData.edges.forEach((edge) => {
              if (edge.source) {
                edges.push({
                  id: `${edge.source}-${key}`,
                  source: edge.source,
                  target: key,
                });
              } else if (edge.target) {
                edges.push({
                  id: `${key}-${edge.target}`,
                  source: key,
                  target: edge.target,
                });
              }
            });
          }
        });

        id = maxId + 1;

        setNodes((nds) => [...nds, ...nodes]);
        setEdges((eds) => [...eds, ...edges]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setNodes, setEdges]);

  useEffect(() => {
    fetchDataFromBackend(); 
  }, [fetchDataFromBackend]);
  return (
    <div className="dndflow">
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeDragStop={onNodeDragStop}
          fitView
          nodeTypes={{
            Rec: RectangleNode,
            ResizableNodeSelected: ResizableNodeSelected,
            RRec: RounderRec,
            EllipseNode: EllipseNode,
            SquareNode: SquareNode,
            Circle: CircleNode,
            Diamond: DiamondNode,
            Para: ParaNode,
            Hexa: HexaNode,
            Cloud: CloudNode,
            Star: StarNode,
            Cylinder: CylinderNode,
            Document: DocumentNode,
            Step: StepNode,
            Trapezoid: TrapezoidNode,
            Tape: TapeNode,
            Note: NoteNode,
            Card: CardNode,
            Callout: CalloutNode,
            Actor: ActorNode,
            Data: DataNode,
            Triangle: TriangleNode,
          }}
          onSelectionChange={onSelectionChange}
        >
          <Background color="#ccc" variant={BackgroundVariant.Lines} />
          <Controls className="controls" />
        </ReactFlow>
      </div>
    </div>
  );
};
const DnDFlowWrapper = () => (
  <ReactFlowProvider>
    <DnDFlow />
  </ReactFlowProvider>
);
export default DnDFlowWrapper;
