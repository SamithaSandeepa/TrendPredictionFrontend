import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pattern.scss";
import Sidebar from "../../components/colorssidebar/Patternbar";
import Navbar from "../../components/navbar/Navbar";
import Colorchart from "../../components/colorchart/Colorchart";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/header/Header";

function Patterns() {
  // const [predictedValue, setPredictedValue] = useState("");
  const navigate = useNavigate(); // Initialize navigate
  // useEffect(() => {
  //   LoadData();
  // }, []);

  // async function LoadData() {
  //   try {
  //     const response = await axios.get("your_api_endpoint_here");
  //     const data = response.data;
  //     // Assuming the predicted value is stored in a property called 'predictedValue' in the response data
  //     setPredictedValue(data.predictedValue);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  const handleNavigation = () => {
    navigate("/"); // Navigate to '/dashboard' route
  };

  return (
    <div className="colors">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <Header />
        <div className="chartcontainer">
          <Colorchart />
        </div>

        {/*<div className="predictvalue">Predicted Value = {predictedValue} </div>*/}
        <button className="homeBtn" onClick={handleNavigation}>
          Navigate to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Patterns;
