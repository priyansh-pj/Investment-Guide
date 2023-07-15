const InterestTableElements = ({data}) => {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.savingsEndOfYear}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.yearlyContribution}</td>
    </tr>
  );
};

export default InterestTableElements;
