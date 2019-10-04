import React from "react";

const Zakupy = () => {
  return (
    <div className='itemsList'>
      <div className='itemsList__header'>
        <h3>Lista Przepisów</h3>
        <i
          className='fa fa-plus-square fa-2x'
          // onClick={openAddRecipe}
          aria-hidden='true'></i>
      </div>

      <div className='itemsList__table'>
        <table>
          <thead>
            <tr className='itemsList--headRow'>
              <th>id</th>
              <th>nazwa</th>
              <th>opis</th>
              <th>akcje</th>
            </tr>
          </thead>
          <tbody>
            {/* {recipes.map((recipe) => (
                  <Recipe
                    recipe={recipe}
                    key={recipe.id}
                    id={recipe.id}
                    toggleEdit={toggleEdit}
                  />
                ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Zakupy;
