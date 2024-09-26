import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
function MyComponent() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  const sendDataToBackendWithAxios = () => {
    console.log("Button clicked");

    const allData = {};
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        allData[key] = localStorage.getItem(key);
      }
    }

    axios
      .post("http://127.0.0.1:8000/api/save-data", allData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  

  return (
    <div>
      <button
  style={{  width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}
  onClick={sendDataToBackendWithAxios}
>
  <FontAwesomeIcon icon={faSave} color="white" />
</button>
      
      <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
    </div>
  );
}

export default MyComponent;
