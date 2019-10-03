import {
  ADD_NEW_SCHEDULE_START,
  ADD_NEW_SCHEDULE_SUCCESS,
  ADD_NEW_SCHEDULE_ERROR,
  FETCH_SCHEDULES,
  FETCH_SCHEDULES_START,
  FETCH_SCHEDULE_DETAILS_START,
  FETCH_SCHEDULE_DETAILS_SUCCESS,
  FETCH_SCHEDULE_DETAILS_ERROR
} from "./actionTypes";

const initState = {
  schedules: [],
  schedule: [],
  loading: false,
  error: ""
};

export const schedules = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_SCHEDULE_START:
      return {
        ...state,
        loading: true,
        error: "",
        schedules: []
      };

    case ADD_NEW_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        schedules: action.payload,
        error: ""
      };

    case ADD_NEW_SCHEDULE_ERROR:
      return {
        ...state,
        loading: false,
        schedules: [],
        error: action.payload
      };

    case FETCH_SCHEDULES_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_SCHEDULES:
      return {
        ...state,
        loading: false,
        schedules: action.payload
      };

    // pobieranie pojedynczego planu
    case FETCH_SCHEDULE_DETAILS_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_SCHEDULE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        schedule: action.payload
      };

    // case FETCH_SCHEDULE_DETAILS_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     // shedule: [],
    //     error: action.payload
    //   };

    default:
      return state;
  }
};
