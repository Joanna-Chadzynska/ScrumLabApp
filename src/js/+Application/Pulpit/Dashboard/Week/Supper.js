import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Supper = ({ schedule }) => {
  return (
    <tr className='table__row'>
      <Monday id={schedule.monday[4]} />
      <Tuesday id={schedule.tuesday[4]} />
      <Wednesday id={schedule.wednesday[4]} />
      <Thursday id={schedule.thrusday[4]} />
      <Friday id={schedule.friday[4]} />
      <Saturday id={schedule.satruday[4]} />
      <Sunday id={schedule.sunday[4]} />
    </tr>
  );
};

export default Supper;
