import { useState } from "react";
import "./CalculatorForm.css";
const CalculatorForm = ({ onCalculate , onReset}) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const updateValue = (target, value) => {
    if (target === "current-savings") {
      setCurrentSavings(value);
      // console.log(currentSavings);
    } else if (target === "yearly-contribution") {
      setYearlyContribution(value);
      // console.log(yearlyContribution);
    } else if (target === "expected-return") {
      setExpectedReturn(value);
      // console.log(expectedReturn);
    } else if (target === "duration") {
      setDuration(value);
      // console.log(duration);
    }
  };
  const calculateSubmit = (event) => {
    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    };
    onCalculate(userInput);
    event.preventDefault();
    setCurrentSavings(0);
    setYearlyContribution(0);
    setExpectedReturn(0);
    setDuration(0);
  };

  const resetButton = (event) =>{
    onReset()
    event.preventDefault();
    setCurrentSavings(0);
    setYearlyContribution(0);
    setExpectedReturn(0);
    setDuration(0);
  }

  return (
    <form className="form" onSubmit={calculateSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings === 0 ? "" : currentSavings}
            onChange={(event) => {
              updateValue("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution === 0 ? "" : yearlyContribution}
            onChange={(event) => {
              updateValue("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn === 0 ? "" : expectedReturn}
            onChange={(event) => {
              updateValue("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration === 0 ? "" : duration}
            onChange={(event) => {
              updateValue("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetButton} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
