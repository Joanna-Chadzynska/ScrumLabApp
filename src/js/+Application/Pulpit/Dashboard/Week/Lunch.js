import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Lunch = ({ schedule }) => {
  return (
    <tr className='table__row'>
      <Monday id={schedule.monday[1]} />
      <Tuesday id={schedule.tuesday[1]} />
      <Wednesday id={schedule.wednesday[1]} />
      <Thursday id={schedule.thrusday[1]} />
      <Friday id={schedule.friday[1]} />
      <Saturday id={schedule.satruday[1]} />
      <Sunday id={schedule.sunday[1]} />
    </tr>
  );
};

export default Lunch;
