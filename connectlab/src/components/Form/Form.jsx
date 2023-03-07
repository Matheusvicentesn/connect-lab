import { FormStyled } from "./Form.styled";
import PropTypes from "prop-types";

export const Form = ({ children }) => {
  return <FormStyled>{children}</FormStyled>;
};
Form.propTypes = {
  children: PropTypes.node.isRequired,
};
