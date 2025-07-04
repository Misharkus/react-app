import classes from "./Button.module.css";

const isPrimary = true;

export const Button = (props) => {
  const { onClick, children } = props;
  // console.log(props);

  return (
    // <button className={isPrimary ? classes.primary : classes.btn}>
    //   Press me
    // </button>
    <button
      className={`${classes.btn} ${isPrimary ? classes.primary : ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
