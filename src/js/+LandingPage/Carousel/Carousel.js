import React from "react";
import Slide from "./Slide";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
// import Wrapper from "../../+Wrapper";
import firstMeal from "./images/meal.jpg";
import secondMeal from "./images/meal2.jpg";
import thirdMeal from "./images/meal3.jpg";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [firstMeal, secondMeal, thirdMeal]
    };
  }

  prevSlide = () => {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
    this.setState({
      currentIndex: index
    });
  };
  nextSlide = () => {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;
    this.setState({
      currentIndex: index
    });
  };

  render() {
    const index = this.state.currentIndex;
    let newImagesArray = this.state.images.slice(index, index + 3);
    if (newImagesArray.length < 3) {
      newImagesArray = newImagesArray.concat(
        this.state.images.slice(0, 3 - newImagesArray.length)
      );
    }
    return (
      <div className='carousel'>
        {newImagesArray.map((image, i) =>
          this.state.currentIndex === i ? (
            <Slide key={i} url={image} alt='' />
          ) : null
        )}
        <LeftArrow goToPrevSlide={this.prevSlide} />
        <RightArrow goToNextSlide={this.nextSlide} />
      </div>
    );
  }
}

export default Carousel;
