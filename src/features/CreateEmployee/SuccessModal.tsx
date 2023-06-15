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

const SuccessModal = ({
  isOpen,
  handleModal,
  textToDisplay,
}: {
  isOpen: boolean
  handleModal: (visible: boolean) => void
  textToDisplay: string
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => handleModal(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customStyles}
        portalClassName="success-modal"
      >
        <h2>{textToDisplay}</h2>
        {/* <button onClick={() => handleModal(false)}>Ok</button> */}
      </Modal>
    </div>
  )
}

export default SuccessModal
