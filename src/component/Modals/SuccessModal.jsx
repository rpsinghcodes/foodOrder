export default function SuccessModal({open, handleModal, setData}) {

  const handleClose = () => {
    handleModal('success', false);
    setData(prevData => ({...prevData, selectedItem:[]}))

  }
  return (
    <dialog className="modal" open={open}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="button" onClick={handleClose}>Okay</button>
      </div>
    </dialog>
  );
}
