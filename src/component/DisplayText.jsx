// eslint-disable-next-line react/prop-types
const DisplayText = ({ location: { name, country } }) => {
    return (
      <div className="text">
        {name}, {country}
      </div>
    );
  };
  
  export default DisplayText;
  