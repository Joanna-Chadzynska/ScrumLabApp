import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Soup = ({ schedule }) => {
  return (
    <tr className='table__row'>
      <Monday id={schedule.monday[2]} />
      <Tuesday id={schedule.tuesday[2]} />
      <Wednesday id={schedule.wednesday[2]} />
      <Thursday id={schedule.thrusday[2]} />
      <Friday id={schedule.friday[2]} />
      <Saturday id={schedule.satruday[2]} />
      <Sunday id={schedule.sunday[2]} />
    </tr>
  );
};

export default Soup;
