import cls from "./Select.module.css";

export const Select = ({ sortSelectValue, onSortSelectChangeHandler }) => {
  return (
    <select
      value={sortSelectValue}
      onChange={onSortSelectChangeHandler}
      className={cls.select}>
      <option value="">sort by</option>
      <hr />
      <option value="_sort=level">Level ASC</option>
      <option value="_sort=-level">Level DESC</option>
      <option value="_sort=completed">completed ASC</option>
      <option value="_sort=-completed">completed DESC</option>
    </select>
  );
};
