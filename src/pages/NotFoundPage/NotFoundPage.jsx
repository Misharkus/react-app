import cls from "./NotFoundPage.module.css";
import logo from "../../assets/404Error-with-a-cute-animal.svg";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={cls.notFoundContainer}>
      {/* <div className={cls.notFoundContent}> */}
      <img src={logo} alt="404 Not Found" className={cls.notFoundImage} />
      <h1 className={cls.notFoundTitle}>Ой! Сторінку не знайдено</h1>
      <p className={cls.notFoundDescription}>
        Можливо, вона була видалена або переміщена. Спробуйте повернутися на
        головну.
      </p>
      <button className={cls.notFoundButton} onClick={() => navigate("/")}>
        На головну
      </button>
    </div>
    // </div>
  );
};
<a href="https://storyset.com/web">Web illustrations by Storyset</a>;
