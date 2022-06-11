import PropTypes from "prop-types";
import "./globalStyle.scss";
GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default function GlobalStyle({ children }) {
  return children;
}
