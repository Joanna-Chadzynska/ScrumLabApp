import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Dinner = ({ schedule }) => {
  return (
    <tr className='table__row'>
      <Monday id={schedule.monday[3]} />
      <Tuesday id={schedule.tuesday[3]} />
      <Wednesday id={schedule.wednesday[3]} />
      <Thursday id={schedule.thrusday[3]} />
      <Friday id={schedule.friday[3]} />
      <Saturday id={schedule.satruday[3]} />
      <Sunday id={schedule.sunday[3]} />
    </tr>
  );
};

export default Dinner;
