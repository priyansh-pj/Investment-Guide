import Header from "./components/UI/Header";
import CalculatorForm from "./components/Calculator/CalculatorForm";
import IntrestTable from "./components/InterestTable/InterestTable";
import "./App.css";
import { useState } from "react";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // console.log("Calculator is tringeer with ", userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyDatas = [];

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyDatas.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest:
          i === 0
            ? yearlyInterest
            : yearlyDatas[i - 1].totalInterest + yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyDatas);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} onReset={()=>{setYearlyData([])}}/>
      {yearlyData.length !== 0 ? (
        <IntrestTable data={yearlyData} />
      ) : (
        <p className="no-table">No Investment Calculated Yet</p>
      )}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
