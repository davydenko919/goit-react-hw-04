import Modal from 'react-modal';
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ImageModal({isModalOpen, closeModal, src, alt}) {



    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={src} alt={alt} className={css.img} />
        <p>{alt}</p>
      </Modal>
      
    );
  }