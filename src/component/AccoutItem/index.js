import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccoutItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://static.bongda24h.vn/medias/standard/2021/9/5/211443-2.jpg"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Phil Foden 47</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Man City</span>
      </div>
    </div>
  );
}

export default AccountItem;
