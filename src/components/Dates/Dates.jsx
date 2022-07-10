import React from "react";

import Date from "../ui/Date";
import  "./Dates.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Dates = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={"dates"}>
      <h2>المواعيد</h2>
      <Carousel
        draggable={true}
        centerMode={true}
        responsive={responsive}
        infinite={true}
        className={"dates__container"}
      >
        <Date firstDay={"5"} secondDay={"2"} title={"أولي إعدادي"}/>
        <Date firstDay={"5"} secondDay={"2"} title={"ثانيه إعدادي"}/>
        <Date firstDay={"5"} secondDay={"2"} title={"ثالثه إعدادي"}/>
        <Date firstDay={"5"} secondDay={"2"} title={"أولي ثانوي"}/>
        <Date firstDay={"5"} secondDay={"2"} title={"ثانيه ثانوي"}/>
        <Date firstDay={"5"} secondDay={"2"} title={"ثالثه ثانوي"}/>
      </Carousel>
    </section>
  );
};

export default Dates;
