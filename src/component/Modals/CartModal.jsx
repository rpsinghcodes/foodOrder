import { useContext } from "react";
import { changeData } from "../../data-context";

export default function CartModal() {
  const { data, modal, handleModal, setData } = useContext(changeData);

  const handleCheckOutModal = () => {
    handleModal("cart", false);
    handleModal("checkOut", true);
  };

  const totalPrice = data.selectedItem.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);
  const updateQuantity = (id, value) => {
    setData((prevData) => ({
      ...prevData,
      selectedItem: prevData.selectedItem.map((item) => {
        console.log("mapping in cart of selectedItem: ", item);
        if (item.id === id) {
          if (value === "add") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (value === "subtract" && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }),
    }));
  };

  return (
    <dialog className="modal" open={modal.cart}>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {data.selectedItem.map((item) => (
            <li className="cart-item" key={item.id}>
              <p>
                {item.name} {item.quantity} x ${item.price}{" "}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, "subtract")}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, "add")}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">${totalPrice.toFixed(2)}</p>

        <div className="modal-actions">
          <button
            className="text-button"
            onClick={() => handleModal("cart", false)}
          >
            Close
          </button>
          <button className="button" onClick={handleCheckOutModal}>
            Go to Checkout
          </button>
        </div>
      </div>
    </dialog>
  );
}
