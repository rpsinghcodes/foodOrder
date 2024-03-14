import logo from '../assets/logo.jpg'

export default function Header({selectedItem, handleModal}) {
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="FoodOrderingLogo" />
        <h1>Online Food Menu</h1>
      </div>
      <button className='button' onClick={() => handleModal('cart', true)}>Cart( {selectedItem.length} )</button>
    </header>
  );
}
