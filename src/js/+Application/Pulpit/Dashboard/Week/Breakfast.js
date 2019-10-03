import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Breakfast = ({ schedule }) => {
  return (
    <tr className='table__row'>
      <Monday id={schedule.monday[0]} />
      <Tuesday id={schedule.tuesday[0]} />
      <Wednesday id={schedule.wednesday[0]} />
      <Thursday id={schedule.thrusday[0]} />
      <Friday id={schedule.friday[0]} />
      <Saturday id={schedule.satruday[0]} />
      <Sunday id={schedule.sunday[0]} />
    </tr>
  );
};

export default Breakfast;
