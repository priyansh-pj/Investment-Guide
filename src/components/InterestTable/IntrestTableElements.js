const InterestTableElements = ({data}) => {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{Math.round(data.savingsEndOfYear)}</td>
      <td>{Math.round(data.yearlyInterest)}</td>
      <td>{Math.round(data.totalInterest)}</td>
      <td>{Math.round(data.yearlyContribution)}</td>
    </tr>
  );
};

export default InterestTableElements;
