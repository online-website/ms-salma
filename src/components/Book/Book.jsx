import React from "react";
import classes from "./Book.module.scss";


const Book = () => {
  return (
    <section
      className={classes.book}
    >
      <p className={classes.text}>
        بادر بحجز مقعدك الآن مع مس سلمي سعيد   وتعلم العلوم والرياضيات  بالطريقه
        الصحيحة
      </p>
      <p className={classes.address}>
        العنوان <br /> شارع خليل الطوخي المقابل لبنزينة الجرباش
      </p>
    </section>
  );
};

export default Book;
