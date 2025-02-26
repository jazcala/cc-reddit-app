import PropTypes from "prop-types";
const CounterButton = ({ handleClick, color, direction }) => {
  const caretClass = `bi bi-caret-${direction}-fill fs-4 up`;
  return (
    <button className="btn border-0" onClick={handleClick}>
      <i className={caretClass} style={{ color: color }}></i>
    </button>
  );
};

CounterButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default CounterButton;
