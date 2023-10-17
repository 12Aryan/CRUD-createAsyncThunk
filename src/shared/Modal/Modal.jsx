import './Modal.css'
const Modal = ({setIsOpenProp}) => {
  return (
    <div className="modal-parent-container">
        <div className="modal-child-container bg-dark">
        <div className="child-modal-header"> <span className="close" onClick={()=>setIsOpenProp(false)}>&times;</span></div>
            modal
           
        </div>
    </div>
  )
}

export default Modal