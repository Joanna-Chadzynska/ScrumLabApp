import React from "react";
import { fetchRecipes } from "../../../../redux/recipes/actions";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

class InfoWidget extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const word = () => {
      switch (this.props.recipes.length) {
        case 1:
          return "przepis";
          break;
        case 2:
          return "przepisy";
          break;
        case 3:
          return "przepisy";
          break;
        case 4:
          return "przepisy";
          break;
        default:
          return "przepisów";
      }
    };
    const phrase = this.props.recipes.length ? (
      <p className='info_widget_paragraph__first'>
        Masz już {this.props.recipes.length} {word()}, nieźle!
      </p>
    ) : (
      <p className='info_widget_paragraph__first'>
        Nie masz jeszcze żadnych przepisów
      </p>
    );

    return (
      <div className='info_widget__container'>
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon first'>
              <i className='fa fa-info'></i>
            </div>
            {phrase}
          </div>
          <div className='info_widget__close close_first'>
            <i className='fa fa-times'></i>
          </div>
        </div>
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon second'>
              <i className='fa fa-exclamation'></i>
            </div>
            <p className='info_widget_paragraph__second'>
              Pamiętaj, aby dodać plan!
            </p>
          </div>
          <div className='info_widget__close close_second '>
            <i className='fa fa-times'></i>
          </div>
        </div>
        <div className='info_widget__box'>
          <div className='info_widget__content'>
            <div className='info_widget__icon third'>
              <i className='fa fa-check'></i>
            </div>
            <p className='info_widget_paragraph__third'>
              Świetnie że jesteś! Udanego planowania i smacznego! :)
            </p>
          </div>
          <div className='info_widget__close close_third'>
            <i className='fa fa-times'></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes
});

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(InfoWidget);
