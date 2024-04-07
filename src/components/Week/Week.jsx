import "./Week.scss";

export const Week = ({ week }) => {
  return (
    <div className="Week">
      <span className="Week__title">{week}</span>
    </div>
  );
};
