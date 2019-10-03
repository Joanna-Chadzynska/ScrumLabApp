import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlan } from "../../../../redux/schedules/actions";
import Header from "./Header";
import Input from "./Input";
import Select from "./Select";

const AddPlan = ({ addPlan, recipes, fetchRecipes, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thrusday, setThrusday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [satruday, setSatruday] = useState([]);
  const [sunday, setSunday] = useState([]);
  const [plan, setPlan] = useState({
    name: "",
    description: "",
    weekNumber: "",
    monday: [],
    tuesday: [],
    wednesday: [],
    thrusday: [],
    friday: [],
    satruday: [],
    sunday: []
  });

  //validation
  let errors = {
    name: "",
    description: "",
    weekNumber: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thrusday: "",
    friday: "",
    satruday: "",
    sunday: ""
  };

  let isValid = true;

  const validate = () => {
    if (!name) {
      isValid = false;
      errors.name = "Podaj nazwę planu!";
    } else {
      plan.name = name;
      errors.name = "";
    }

    if (!description) {
      errors.description = "Podaj opis planu!";
    } else {
      plan.description = description;
      errors.description = "";
    }

    if (!weekNumber) {
      isValid = false;
      errors.weekNumber = "Podaj numer tygodnia!";
    } else {
      plan.weekNumber = weekNumber;
      errors.weekNumber = "";
    }

    if (!monday) {
      errors.monday = "pusta";
    } else {
      plan.monday = monday;
      errors.monday = "";
    }
    if (!tuesday) {
      errors.tuesday = "pusta";
    } else {
      plan.tuesday = tuesday;
      errors.tuesday = "";
    }
    if (!wednesday) {
      errors.wednesday = "pusta";
    } else {
      plan.wednesday = wednesday;
      errors.wednesday = "";
    }
    if (!thrusday) {
      errors.monday = "pusta";
    } else {
      plan.thrusday = thrusday;
      errors.thrusday = "";
    }
    if (!friday) {
      errors.friday = "pusta";
    } else {
      plan.friday = friday;
      errors.friday = "";
    }
    if (!satruday) {
      errors.satruday = "pusta";
    } else {
      plan.satruday = satruday;
      errors.satruday = "";
    }
    if (!sunday) {
      errors.sunday = "pusta";
    } else {
      plan.sunday = sunday;
      errors.sunday = "";
    }

    setPlan({ ...plan });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addPlan(plan);
      setName("");
      setDescription("");
      setWeekNumber("");
      onClose();
      alert("Dziękujemy za dodanie planu!");
    } else {
      // console.log("Formularz błędnie wypełniony");
      console.log(errors);
      return errors;
    }
  };

  return (
    <div className='backdrop'>
      <div className='addPlan__container modal '>
        <form method='post' className='addPlan__form' onSubmit={handleSubmit}>
          <i
            className='fa fa-times close-btn'
            aria-hidden='true'
            onClick={onClose}></i>
          <Header name={name} weekNumber={weekNumber} isValid={isValid} />
          <Input
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            weekNumber={weekNumber}
            setWeekNumber={setWeekNumber}
          />
          <Select
            recipes={recipes}
            setMonday={setMonday}
            setTuesday={setTuesday}
            setWednesday={setWednesday}
            setThrusday={setThrusday}
            setFriday={setFriday}
            setSatruday={setSatruday}
            setSunday={setSunday}
          />
        </form>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addPlan: (plan) => dispatch(addPlan(plan))
  };
};

export default connect(
  null,
  mapDispatch
)(AddPlan);
