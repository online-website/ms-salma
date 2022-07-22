import React from "react";

import Date from "../ui/Date";
import "./Dates.scss";

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
        <Date firstDay={"1 رياضه"} secondDay={"1 علوم"} title={"أولي إعدادي"} />
        <Date
          firstDay={"12 رياضه"}
          secondDay={"12 علوم"}
          title={"ثانيه إعدادي"}
        />
        <Date
          firstDay={"11 رياضه"}
          secondDay={"11 علوم"}
          title={"ثالثه إعدادي"}
        />
      </Carousel>
    </section>
  );
};

export default Dates;
