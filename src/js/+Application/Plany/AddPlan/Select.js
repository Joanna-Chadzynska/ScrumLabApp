import React from "react";
import { TableRows } from "./TableWeekRows";

const Select = ({
  recipes,
  setMonday,
  setTuesday,
  setWednesday,
  setThrusday,
  setFriday,
  setSatruday,
  setSunday
}) => {
  return (
    <div className='addPlan_table__container'>
      <table className='addPlan__table'>
        <thead>
          <tr className='addPlan_table__header'>
            <th></th>
            <th>Śniadanie</th>
            <th>Drugie Śniadanie</th>
            <th>Zupa</th>
            <th>Drugie Danie</th>
            <th>Kolacja</th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            recipes={recipes}
            setMonday={setMonday}
            setTuesday={setTuesday}
            setWednesday={setWednesday}
            setThrusday={setThrusday}
            setFriday={setFriday}
            setSatruday={setSatruday}
            setSunday={setSunday}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Select;
