import InterestTableElements from "./IntrestTableElements";
const IntrestTable = ({data}) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(items=><InterestTableElements data={items} key={items.year}/>)}
      </tbody>
    </table>
  );
};

export default IntrestTable;
