import React from "react";
import { useState } from "react";



function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [message, setMessage] = useState('');

  // const bmicalc = () => {
  //   const heightInMeter = height / 100; // Convert height to meters
  //   const bmi = weight / (heightInMeter * heightInMeter);
  //   console.log(bmi);
  //   setBmiResult(bmi.toFixed(2)); // Round BMI to two decimal places
  //   console.log(setBmiResult);
  //   return setBmiResult;
  // }

  const calculateBMI = () => {
    console.log(age);


    if (height <= 0 || weight <= 0) {
      setBmiResult('Invalid input');
      return;
    }
    if (age < 19) {
      const heightInMeter = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeter * heightInMeter);
      console.log(bmi);
      setBmiResult(bmi.toFixed(2)); // Round BMI to two decimal places
      //console.log(setBmiResult);

      if (bmi <= 13) {
        setMessage("UnderWeighted Kid")
        return;
      } else if (bmi <= 19) {
        setMessage("Healthy Kid")
        return;
      } else if (bmi < 21) {

        setMessage("OverWeighted Kid. reduce some weight")
        return;
      } else {

        setMessage("Obesity kid. Take care of your Health")
        return;
      }
    }
    else {
      //bmicalc();
      const heightInMeter = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeter * heightInMeter);
      console.log(bmi);
      setBmiResult(bmi.toFixed(2)); // Round BMI to two decimal places
      //console.log(setBmiResult);
      if (bmi < 19) {

        setMessage("Underweighted Adult")
        return;
      } else if (bmi <= 25) {
        setMessage("Healthy Adult")
        return;
      } else if (bmi <= 30) {
        setMessage("Overweighted reduce some weight")
        return;
      } else {
        setMessage("having Obesity. Take care of your health ")
        return;
      }

    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Age :</label>
        <input type="text" value={age} placeholder="Enter Age" onChange={handleAgeChange} />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input type="text" value={height} placeholder="Enter Height" onChange={handleHeightChange} />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="text" value={weight} placeholder="Enter Weight" onChange={handleWeightChange} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmiResult !== null && <div className="result">Your BMI: {bmiResult}</div>}
      {bmiResult !== null && <div className="result">Your are {message}</div>}

    </div>
  );
}

export default App;
