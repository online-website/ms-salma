import classes from "./Date.module.scss";


const Date = ({firstDay, secondDay, title}) => {
  return <div className={classes.card}>
    <h3>{title}</h3>
    <p>سبت أثنين أربعاء</p>
    <p>الساعه: {firstDay}</p>
    <p>أحد ثلاثاء خميس</p>
    <p>الساعه: {secondDay}</p>
  </div>
}

export default Date;