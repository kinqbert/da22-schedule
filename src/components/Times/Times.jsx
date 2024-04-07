import "./Times.scss"
import { Time } from "../Time/Time";

export const Times = () => {
  return (
    <div className="Times">
      <Time startTime="8:30" endTime="10:05"/>
      <Time startTime="10:25" endTime="12:00"/>
      <Time startTime="12:20" endTime="13:55"/>
      <Time startTime="14:15" endTime="15:50"/>
      <Time startTime="16:10" endTime="17:45"/>
    </div>
  );
}