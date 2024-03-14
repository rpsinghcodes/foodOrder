import { useContext } from "react";
import { changeData } from "../../data-context";

export default function () {
  const { modal, data, handleModal } = useContext(changeData);

  const totalPrice = data.selectedItem.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify({
        order: {
          items: data.selectedItem,
          customer: data,
        },
      }),
      headers: { "Content-Type": "application/json" },
    });

    const resData = await response.json();
    console.log("resData", resData);
    if (response.ok) {
      handleModal("checkOut", false);
      handleModal("success", true);
    } else {
      alert("something goes wrong");
    }

    console.log("i got submitted");
  }
  return (
    <dialog className="modal" open={modal.checkOut}>
      <h2>CheckOut</h2>
      <p>Total Amount ${totalPrice.toFixed(2)}</p>
      <form className="control" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" autoComplete="name" required />
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" name="email" autoComplete="email" required />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          autoComplete="street-address"
          required
        />

        <div className="control">
          <div className="control-row">
            <label htmlFor="postal-code">Postal Code</label>
            <input
              type="text"
              name="postal-code"
              autoComplete="postal-code"
              required
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              autoComplete="address-level2"
              name="city"
              required
            />
          </div>
        </div>

        <div className="modal-actions">
          <button
            className="text-button"
            type="reset"
            onClick={() => handleModal("checkOut", false)}
          >
            Close
          </button>
          <button className="button" type="submit">
            Go to Checkout
          </button>
        </div>
      </form>
    </dialog>
  );
}
