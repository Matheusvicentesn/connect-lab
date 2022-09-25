import { ModalStyled, Overlay } from "./Modal.styled";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
const Modal = ({
  open,
  children,
  onClose,
  customWidth,
  customHeight,
  color,
  esconder,
}) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay>
        <div>
          <ModalStyled
            customWidth={customWidth}
            customHeight={customHeight}
            color={color}
            esconder={esconder}
          >
            <div className="container">
              {children}
              <div className="btnClose">
                <button onClick={onClose}> Fechar</button>
              </div>
            </div>
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  customWidth: PropTypes.number,
  customHeight: PropTypes.number,
  color: PropTypes.bool,
  esconder: PropTypes.string,
};
