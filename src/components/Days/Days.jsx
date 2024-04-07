import "./Days.scss"
import { Day } from '../Day/Day'

export const Days = () => {
  return (
    <div className="Days">
      <Day day="Понеділок"/>
      <Day day="Вівторок"/>
      <Day day="Середа"/>
      <Day day="Четвер"/>
      <Day day="П'ятниця"/>
      <Day day="Субота"/>
    </div>
  );
}