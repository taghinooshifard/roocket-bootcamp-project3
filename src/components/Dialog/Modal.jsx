import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { AiTwotoneCloseSquare } from 'react-icons/ai';

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

  return (
    <dialog className="rounded-md  shadow-md shadow-blue-300" ref={modalRef} onKeyDown={handleKeyDown}>
    <div className="flex justify-end bg-sky-100">
    {hasCloseBtn&& <button
                   className=" text-gray-500 hover:bg-red-600" 
                   onClick={handleCloseModal}>
                    <AiTwotoneCloseSquare/>
                    </button>}
                    </div>
    {children}
  </dialog>
  )
}

Modal.propTypes = {
    onClose:PropTypes.func,
    children:PropTypes.node,
    isOpen:PropTypes.bool,
    hasCloseBtn:PropTypes.bool
  }
export default Modal;
