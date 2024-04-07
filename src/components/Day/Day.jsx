import "./Day.scss";

export const Day = ({ day }) => {
  return (
    <div className="Day">
      <span className="Day__title">{day}</span>
    </div>
  );
};
