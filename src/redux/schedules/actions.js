import {
  ADD_NEW_SCHEDULE_START,
  ADD_NEW_SCHEDULE_SUCCESS,
  ADD_NEW_SCHEDULE_ERROR,
  FETCH_SCHEDULES,
  FETCH_SCHEDULES_START,
  FETCH_SCHEDULES_ERROR,
  FETCH_SCHEDULE_DETAILS_START,
  FETCH_SCHEDULE_DETAILS_SUCCESS,
  FETCH_SCHEDULE_DETAILS_ERROR
} from "./actionTypes";

export const addNewScheduleStart = () => ({ type: ADD_NEW_SCHEDULE_START });

export const addNewScheduleSuccess = (payload) => ({
  type: ADD_NEW_SCHEDULE_SUCCESS,
  payload
});

export const addNewScheduleError = (payload) => ({
  type: ADD_NEW_SCHEDULE_ERROR,
  payload
});

export const addPlan = (plan) => (dispatch) => {
  dispatch(addNewScheduleStart());

  fetch(`http://localhost:3000/schedules`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(plan)
  })
    .then((resp) => resp.json())
    .then((plan) => dispatch(addNewScheduleSuccess(plan)))
    .catch((error) => dispatch(addNewScheduleError(error)));
};

//pobieranie planów
export const fetchSchedulesStart = () => ({ type: FETCH_SCHEDULES_START });
export const fetchSchedulesSuccess = (payload) => ({
  type: FETCH_SCHEDULES,
  payload
});

export const fetchSchedulesError = (payload) => ({
  type: FETCH_SCHEDULES_ERROR,
  payload
});

export const fetchSchedules = () => (dispatch) => {
  dispatch(fetchSchedulesStart());
  fetch(`http://localhost:3000/schedules`)
    .then((response) => response.json())
    .then((schedules) => dispatch(fetchSchedulesSuccess(schedules)))
    .catch((error) => dispatch(fetchSchedulesError(error)));
};

//pobieranie pojedynczego planu

export const fetchScheduleDetailsStart = () => ({
  type: FETCH_SCHEDULE_DETAILS_START
});
export const fetchScheduleDetailsSuccess = (payload) => ({
  type: FETCH_SCHEDULE_DETAILS_SUCCESS,
  payload
});
export const fetchScheduleDetailsError = (payload) => ({
  type: FETCH_SCHEDULE_DETAILS_ERROR,
  payload
});

export const getScheduleDetails = (id) => (dispatch) => {
  dispatch(fetchScheduleDetailsStart());

  fetch(`http://localhost:3000/schedules/${id}`)
    .then((resp) => resp.json())
    .then((shedule) => dispatch(fetchScheduleDetailsSuccess(shedule)));
  // .catch((error) => dispatch(fetchScheduleDetailsError(error)));
};
