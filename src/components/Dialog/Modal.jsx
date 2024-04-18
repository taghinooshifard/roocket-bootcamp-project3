import PropTypes from 'prop-types';
import withColorButton from '../../hoc/withColorButton';
import ActionButton from '../Buttons/actionButton';
import { IoChevronBackCircle } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

function Modal({ isOpen, hasCloseBtn, onClose, children }) {
    const modalRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(isOpen);
    useEffect(() => {
        setModalOpen(isOpen);
      }, [isOpen]);
      useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
          if (isModalOpen) {
            modalElement.showModal();
          } else {
            modalElement.close();
          }
        }
      }, [isModalOpen]);
      const handleCloseModal = () => {
        if (onClose) {
          onClose();
        }
        setModalOpen(false);
      };
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          handleCloseModal();
        }
      };
      const newPostButton = withColorButton(ActionButton,
        "red",
        <IoChevronBackCircle  className="text-xl" />
        ,"back",
        handleCloseModal );
  
  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
    {hasCloseBtn && newPostButton}
    {children}
  </dialog>
  )
}

Modal.propTypes = {
    onClose:PropTypes.func,
    children:PropTypes.node,
    isOpen:PropTypes.boolean,
    hasCloseBtn:PropTypes.boolean
  }
export default Modal;
