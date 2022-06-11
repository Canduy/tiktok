import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabed = false,
  rounded = false,
  className,
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = `button`;
  const props = { onClick, ...passProps };

  // remove event listener
  if (disabed) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = `a`;
  }

  const classes = cx("wrapper", {
    [className]: className,
    leftIcon,
    rightIcon,
    primary,
    outline,
    small,
    large,
    text,
    disabed,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabed: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};
export default Button;
