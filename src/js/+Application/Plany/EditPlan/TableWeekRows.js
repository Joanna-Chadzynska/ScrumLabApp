import React, { useState } from "react";
import Option from "./Option";

const mealsForWeek = [
  {
    meal: "breakfast",
    id: 1
  },
  {
    meal: "lunch",
    id: 2
  },
  {
    meal: "soup",
    id: 3
  },
  {
    meal: "dinner",
    id: 4
  },
  {
    meal: "supper",
    id: 5
  }
];

export const TableRows = ({
  recipes,
  setMonday,
  setTuesday,
  setWednesday,
  setThrusday,
  setFriday,
  setSatruday,
  setSunday
}) => {
  const [meals, setMeals] = useState({
    breakfast: "",
    lunch: "",
    soup: "",
    dinner: "",
    supper: ""
  });

  const mealsArray = Object.values(meals);

  const addToMonday = () => {
    setMonday(mealsArray);
  };
  const addToTuesday = () => {
    setTuesday(mealsArray);
  };
  const addToWednesday = () => {
    setWednesday(mealsArray);
  };
  const addToThrusday = () => {
    setThrusday(mealsArray);
  };
  const addToFriday = () => {
    setFriday(mealsArray);
  };
  const addToSatruday = () => {
    setSatruday(mealsArray);
  };
  const addToSunday = () => {
    setSunday(mealsArray);
  };

  return (
    <>
      <tr onClick={addToMonday}>
        <td>
          <h4>Poniedziałek</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr onClick={addToTuesday}>
        <td>
          <h4>Wtorek</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr onClick={addToWednesday}>
        <td>
          <h4>Środa</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr>
        <td>
          <h4>Czwartek</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id} onClick={addToThrusday}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr>
        <td>
          <h4>Piątek</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id} onClick={addToFriday}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr>
        <td>
          <h4>Sobota</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id} onClick={addToSatruday}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
      <tr>
        <td>
          <h4>Niedziela</h4>
        </td>
        {mealsForWeek.map((meal) => (
          <td key={meal.id} onClick={addToSunday}>
            <Option
              meal={meal}
              meals={meals}
              recipes={recipes}
              setMeals={setMeals}
            />
          </td>
        ))}
      </tr>
    </>
  );
};
