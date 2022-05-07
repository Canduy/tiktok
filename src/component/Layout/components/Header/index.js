import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import image from "~/assets/image";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={image.logo} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
