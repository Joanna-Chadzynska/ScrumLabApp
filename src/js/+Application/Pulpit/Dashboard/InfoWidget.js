import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../../../../redux/recipes/actions";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

const InfoWidget = ({ fetchRecipes, recipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [isOnClose, setClose] = useState(false);
  const [widgetId, setWidgetId] = useState("");

  const closeMessage = (e, id) => {
    setClose(!isOnClose);
    setWidgetId(id);
  };

  const word = () => {
    switch (recipes.length) {
      case 1:
        return "przepis";

      case 2:
        return "przepisy";

      case 3:
        return "przepisy";

      case 4:
        return "przepisy";

      default:
        return "przepisów";
    }
  };
  const phrase = recipes.length ? (
    <p className='info_widget_paragraph__first'>
      Masz już {recipes.length} {word()}, nieźle!
    </p>
  ) : (
    <p className='info_widget_paragraph__first'>
      Nie masz jeszcze żadnych przepisów!
    </p>
  );

  return (
    <div className='info_widget__container'>
      {isOnClose && widgetId === 1 ? null : (
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon first'>
              <i className='fa fa-info-circle fa-3x'></i>
            </div>
            {phrase}
          </div>
          <div className='info_widget__close close_first'>
            <i
              className='fa fa-window-close'
              id='1'
              onClick={(e) => closeMessage(e, 1)}></i>
          </div>
        </div>
      )}
      {isOnClose && widgetId === 2 ? null : (
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon second'>
              <i className='fa fa-exclamation-circle fa-3x'></i>
            </div>
            <p className='info_widget_paragraph__second'>
              Pamiętaj, aby dodać plan!
            </p>
          </div>
          <div className='info_widget__close close_second '>
            <i
              className='fa fa-window-close'
              id='2'
              onClick={(e) => closeMessage(e, 2)}></i>
          </div>
        </div>
      )}

      {isOnClose && widgetId === 3 ? null : (
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon third'>
              <i className='fa fa-check-circle fa-3x'></i>
            </div>
            <p className='info_widget_paragraph__third'>
              Świetnie że jesteś! Udanego planowania i smacznego! :)
            </p>
          </div>
          <div className='info_widget__close close_third'>
            <i
              className='fa fa-window-close'
              id='3'
              onClick={(e) => closeMessage(e, 3)}></i>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes
});

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(InfoWidget);
