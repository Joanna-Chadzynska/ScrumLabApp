import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getScheduleDetails } from "../../../../redux/schedules/actions";
import { Breakfast, Lunch, Soup, Dinner, Supper } from "./Week";
import "font-awesome/css/font-awesome.min.css";

const TableItem = ({ schedule, recipe, id, previous, next }) => {
  useEffect(() => {
    getScheduleDetails(schedule.id);
  }, []);

  return (
    <div className='dashboard__plan'>
      <div className='dashboard_table__container'>
        <h4>Twój plan na {schedule.weekNumber} tydzień:</h4>
        <table className='dashboard__table'>
          <thead className='dashboard_table__header'>
            <tr>
              <th>Poniedziałek</th>
              <th>Wtorek</th>
              <th>Środa</th>
              <th>Czwartek</th>
              <th>Piątek</th>
              <th>Sobota</th>
              <th>Niedziela</th>
            </tr>
          </thead>
          <tbody className='dashboard_table__body'>
            <Breakfast schedule={schedule} />
            <Lunch schedule={schedule} />
            <Soup schedule={schedule} />
            <Dinner schedule={schedule} />
            <Supper schedule={schedule} />
          </tbody>
          <tfoot>
            <div className='prev' onClick={() => previous(schedule.id)}>
              <i className='fa fa-angle-double-left' />
              &nbsp; Poprzedni
            </div>
            <div className='next' onClick={() => next(schedule.id)}>
              Następny &nbsp;
              <i className='fa fa-angle-double-right' />
            </div>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  recipe: state.recipes.recipe
  // schedule: state.schedules.schedule
});

const mapDispatch = (dispatch) => ({
  getScheduleDetails: (id) => dispatch(getScheduleDetails(id))
});

export default connect(
  mapState,
  mapDispatch
)(TableItem);
