import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef, useState } from "react";
import image from "~/assets/image";
import styles from "./Image.module.scss";
function Image(
  { src, alt, className, fallback: customFallback = image.noImage, ...props },
  ref
) {
  const [fallback, setFallBack] = useState("");
  const handleError = () => {
    setFallBack(customFallback);
  };
  return (
    <img
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...props}
      className={classNames(styles.wrapper, className)}
      onError={handleError}
    />
  );
}
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default forwardRef(Image);
