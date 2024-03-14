import logo from '../assets/logo.jpg'
import { useContext } from "react";
import { changeData } from "../data-context";
// export default function Header({selectedItem, handleModal}) {
export default function Header() {
  const { data, handleModal } = useContext(changeData);
  console.log(data);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="FoodOrderingLogo" />
        <h1>Online Food Menu</h1>
      </div>

      <button className="button" onClick={() => handleModal("cart", true)}>
        Cart( {data.selectedItem.length} )
      </button>
    </header>
  );
}
