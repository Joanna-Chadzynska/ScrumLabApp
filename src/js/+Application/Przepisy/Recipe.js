import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import "jspdf-autotable";
import { connect } from "react-redux";
import {
  deleteRecipe,
  getRecipeDetailsToPdf
} from "../../../redux/recipes/actions";

const Recipe = ({
  recipe,
  recipePdf,
  deleteRecipe,
  toggleEdit,
  id,
  getRecipeDetailsToPdf
}) => {
  const [isPdf, setPdf] = useState(false);

  const handleClick = (id) => {
    deleteRecipe(id);
    window.location.reload();
  };

  const makePdf = (e) => {
    setPdf(!isPdf);
    getRecipeDetailsToPdf(recipe.id);
    jsPdfGenerator();
  };

  const jsPdfGenerator = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const documentDefinition = {
      pageSize: "A4",
      pageOrientation: "portrait",
      content: [
        { text: `${recipe.name}`, style: "header" },
        {
          text: `${recipe.description}`,
          style: "anotherStyle"
        },
        { text: "Składniki:", style: "ingredients" },
        recipe.ingredients.map(function(el) {
          return { ul: [el] };
        }),

        { text: "Sposób przygotowania:", style: "ingredients" },
        recipe.steps.map(function(el) {
          return { ul: [el] };
        })
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
        { text: `${recipe.name}`, style: "header" },
        {
          text: `${recipe.description}`,
          style: "anotherStyle"
        },
        { text: "Składniki:", style: "ingredients" },
        recipe.ingredients.map(function(el) {
          return { ul: [el] };
        }),

        { text: "Sposób przygotowania:", style: "ingredients" },
        recipe.steps.map(function(el) {
          return { ul: [el] };
        })
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
      <td>{recipe.id}</td>
      <td>{recipe.name}</td>
      <td>{recipe.description}</td>
      <td className='itemsList__actions'>
        <div className='basis'>
          <i
            className='edit fa fa-pencil-square-o'
            aria-hidden='true'
            id={recipe.id}
            onClick={toggleEdit}
          />
          <i
            className='delete fa fa-trash-o'
            aria-hidden='true'
            onClick={() => handleClick(recipe.id)}
          />
        </div>
        <div className='extra'>
          <i className='duplicate fa fa-clone' aria-hidden='true' />
          <i
            className='makepdf fa fa-file-pdf-o'
            aria-hidden='true'
            onClick={makePdf}
          />
          <i className='fa fa-print' aria-hidden='true' onClick={print} />
        </div>
      </td>
    </tr>
  );
};

const mapState = (state) => {
  return {
    recipePdf: state.recipes.recipePdf
  };
};

const mapDispatch = (dispatch) => ({
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  getRecipeDetailsToPdf: (id) => dispatch(getRecipeDetailsToPdf(id))
});

export default connect(
  mapState,
  mapDispatch
)(Recipe);
