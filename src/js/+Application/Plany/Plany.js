import React, { useState, useEffect } from "react";
import Plan from "./Plan";
import AddPlan from "./AddPlan";
import EditPlan from "./EditPlan";
import { connect } from "react-redux";
import { fetchSchedules } from "../../../redux/schedules/actions";
import EditRecipe from "../Przepisy/EditRecipe";

const Plany = ({ schedules, fetchSchedules }) => {
  useEffect(() => {
    fetchSchedules();
  }, []);

  const [isAddPlan, setAddPlan] = useState(false);
  const [isInEditMode, setEditMode] = useState(false);
  const [editedItemId, setItemId] = useState("");

  const toggleEdit = (e) => {
    setEditMode(!isInEditMode);
    setItemId(e.target.id);
    if (isInEditMode) {
      window.location.reload();
    }
  };

  const openAddPlan = (e) => {
    setAddPlan(!isAddPlan);
    if (isAddPlan) {
      window.location.reload();
    }
  };

  return (
    <>
      {isAddPlan ? (
        <AddPlan show={isAddPlan} onClose={openAddPlan} />
      ) : isInEditMode ? (
        <EditPlan
          show={isInEditMode}
          onClose={toggleEdit}
          planId={editedItemId}
        />
      ) : (
        <div className='itemsList'>
          <div className='itemsList__header'>
            <h3>Lista Planów</h3>
            <i
              className='fa fa-plus-square fa-2x'
              onClick={openAddPlan}
              aria-hidden='true'></i>
          </div>

          <div className='itemsList__table'>
            <table>
              <thead>
                <tr className='itemsList--headRow'>
                  <th>id</th>
                  <th>nazwa</th>
                  <th>opis</th>
                  <th>tydzień</th>
                  <th>akcje</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => (
                  <Plan
                    schedule={schedule}
                    key={schedule.id}
                    id={schedule.id}
                    toggleEdit={toggleEdit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    schedules: state.schedules.schedules
  };
};

const mapDispatch = (dispatch) => ({
  fetchSchedules: () => dispatch(fetchSchedules())
});

export default connect(
  mapState,
  mapDispatch
)(Plany);
