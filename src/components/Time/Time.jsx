import "./Time.scss"

export const Time = ({startTime, endTime}) => {
  return (
    <div className="Time">
      <span className="Time__value">{startTime}</span>
      <div className="Time__line"></div>
      <span className="Time__value">{endTime}</span>
    </div>
  );
}