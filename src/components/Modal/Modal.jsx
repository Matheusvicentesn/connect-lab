import { ModalStyled, Overlay } from "./Modal.styled";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay>
        <div>
          <ModalStyled>
            {children}
            <button onClick={onClose}> Close 2</button>
          </ModalStyled>
        </div>
      </Overlay>
    </>,
    document.getElementById("portal"),
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
