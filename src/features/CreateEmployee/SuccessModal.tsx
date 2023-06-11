import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightcyan',
    borderRadius: '20px',
  },
}

Modal.setAppElement('#root')

const SuccessModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        portalClassName="success-modal"
        contentLabel="Example Modal"
      >
        <h2>Employee Created!</h2>
      </Modal>
    </div>
  )
}

export default SuccessModal
