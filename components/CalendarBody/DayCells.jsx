import DayCell from "./DayCell";

const { daysOfWeek } = require("@/shared/constants");

export const DayCells = ({ hour }) => {
    return ( 
        <>
            {daysOfWeek.map((day, dayIndex) => {
                return (
                    <DayCell
                        key={dayIndex}
                        hour={hour}
                        day={day}
                        dayIndex={dayIndex}
                    />
                )
            })}
        </>
    );
}

export default DayCells