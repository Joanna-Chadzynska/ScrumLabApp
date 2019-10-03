import React, { useEffect, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import { connect } from "react-redux";
import { fetchRecipes, getRecipeDetails } from "../../../redux/recipes/actions";

const Plan = ({
  schedule,
  toggleEdit,
  recipes,
  recipe,
  fetchRecipes,
  getRecipeDetails
}) => {
  // useEffect(() => {
  //   fetchRecipes();
  // }, []);

  const [recipePlan, setRecipe] = useState({});

  const jsPdfGenerator = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const documentDefinition = {
      pageSize: "A4",
      pageOrientation: "portrait",
      content: [
        { text: `${schedule.name}`, style: "header" },
        {
          text: `${schedule.description}`,
          style: "anotherStyle"
        }
        // { text: "Składniki:", style: "ingredients" },
        // recipe.ingredients.map(function(el) {
        //   return { ul: [el] };
        // }),

        // { text: "Sposób przygotowania:", style: "ingredients" },
        // recipe.steps.map(function(el) {
        //   return { ul: [el] };
        // })
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 6]
        },
        anotherStyle: {
          italics: true,
          margin: [0, 0, 0, 6],
          alignment: "justify"
        },
        ingredients: {
          margin: [0, 6, 0, 6],
          bold: true
        }
      }
    };

    pdfMake.createPdf(documentDefinition).open();
  };

  const print = (e) => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const documentDefinition = {
      pageSize: "A4",
      pageOrientation: "portrait",
      content: [
        { text: `${schedule.name}`, style: "header" },
        {
          text: `${schedule.description}`,
          style: "anotherStyle"
        }
        // { text: "Składniki:", style: "ingredients" },
        // recipe.ingredients.map(function(el) {
        //   return { ul: [el] };
        // }),

        // { text: "Sposób przygotowania:", style: "ingredients" },
        // recipe.steps.map(function(el) {
        //   return { ul: [el] };
        // })
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 6]
        },
        anotherStyle: {
          italics: true,
          margin: [0, 0, 0, 6],
          alignment: "justify"
        },
        ingredients: {
          margin: [0, 6, 0, 6],
          bold: true
        }
      }
    };

    pdfMake.createPdf(documentDefinition).print();
  };
  return (
    <tr className='itemsList--bodyRow'>
      <td>{schedule.id}</td>
      <td>{schedule.name}</td>
      <td>{schedule.description}</td>
      <td>{schedule.weekNumber}</td>
      <td className='itemsList__actions'>
        <div className='basis'>
          <i
            className='edit fa fa-pencil-square-o'
            aria-hidden='true'
            id={schedule.id}
            onClick={toggleEdit}
          />
          <i
            className='delete fa fa-trash-o'
            aria-hidden='true'
            // onClick={() => handleClick(recipe.id)}
          />
        </div>
        <div className='extra'>
          <i className='duplicate fa fa-clone' aria-hidden='true' />
          <i
            className='makepdf fa fa-file-pdf-o'
            aria-hidden='true'
            onClick={jsPdfGenerator}
          />
          <i className='fa fa-print' aria-hidden='true' onClick={print} />
        </div>
      </td>
    </tr>
  );
};

const mapState = (state) => {
  return {
    recipes: state.recipes.recipes,
    recipe: state.recipes.recipe
  };
};

const mapDispatch = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  getRecipeDetails: (id) => dispatch(getRecipeDetails(id))
});

export default connect(
  mapState,
  mapDispatch
)(Plan);
