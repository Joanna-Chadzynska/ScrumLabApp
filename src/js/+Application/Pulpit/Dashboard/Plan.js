import React, { useEffect } from "react";
import TableItem from "./TableItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import { fetchSchedules } from "../../../../redux/schedules/actions";
import { connect } from "react-redux";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      className='dashboard_prev_page__box'
      style={{ ...style, display: "block" }}>
      <p>Poprzedni</p>
      <i className='fa fa-angle-double-left' onClick={onClick}></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className='dashboard_next_page__box'
      style={{ ...style, display: "block" }}>
      <div className='next'>
        <p>Nastepny</p>
        <i className='fa fa-angle-double-right' onClick={onClick}></i>
      </div>
    </div>
  );
};

const Plan = ({ fetchSchedules, schedules }) => {
  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  const previous = (id) => {
    console.log("poprzedni plan", id);
  };

  const next = (id) => {
    console.log("nastepny plan", id);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // vertical: true,
    // nextArrow: <PrevArrow />,
    // prevArrow: <NextArrow />
    // verticalSwiping: true
  };

  return (
    <div>
      {schedules.map((schedule) => (
        <TableItem
          key={schedule.id}
          schedule={schedule}
          id={schedule.id}
          onClick={onclick}
          previous={previous}
          next={next}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedules: state.schedules.schedules
});

export default connect(
  mapStateToProps,
  { fetchSchedules }
)(Plan);
