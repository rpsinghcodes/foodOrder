import { useContext } from "react";
import { changeData } from "../../data-context";

export default function SuccessModal() {
  const { modal, handleModal, setData } = useContext(changeData);

  const handleClose = () => {
    handleModal("success", false);
    setData((prevData) => ({ ...prevData, selectedItem: [] }));
  };
  return (
    <dialog className="modal" open={modal.success}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="button" onClick={handleClose}>
          Okay
        </button>
      </div>
    </dialog>
  );
}
