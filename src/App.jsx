import { useEffect, useContext } from "react";
import Card from "./component/Card";
import Header from "./component/Header";
import { useState } from "react";
import CartModal from "./component/Modals/CartModal";
import CheckoutModal from "./component/Modals/CheckoutModal";
import SuccessModal from "./component/Modals/SuccessModal";
import { changeData } from "./data-context";

function App() {

  const {data, modal, setData, handleModal, loading  } = useContext(changeData);
  console.log(data);
  

  return (
    <main>
      <Header
        selectedItem={data.selectedItem}
        handleModal={handleModal}
      />
      <SuccessModal open={modal.success} setData={setData} handleModal={handleModal} />
      <CheckoutModal
        items={data.selectedItem}
        open={modal.checkOut}
        handleModal={handleModal}
      />
      <CartModal
        items={data.selectedItem}
        open={modal.cart}
        handleModal={handleModal}
        setData={setData}
      />
      <div id="meals">
        {!loading ? (
          data.data.map((item) => (
            <Card
              fallbackText="Select the places you would like to visit below."
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              selectedItem={data.selectedItem}
              setData={setData}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </main>
  );
}

export default App;
