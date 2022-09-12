import { CardStyled } from "./Card.styles";
import PropTypes from "prop-types";

export const Card = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
