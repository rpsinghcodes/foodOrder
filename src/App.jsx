import { useEffect } from "react";
import Card from "./component/Card";
import Header from "./component/Header";
import { useState } from "react";
import CartModal from "./component/Modals/CartModal";
import CheckoutModal from "./component/Modals/CheckoutModal";
import SuccessModal from "./component/Modals/SuccessModal";

function App() {
  const [data, setData] = useState({data:[], selectedItem:[]});
  
  const [modal, setModal] = useState({
    cart: false,
    checkOut: false,
    success: false,
  });

  const handleModal = (modalName, condition) => {
    setModal(prevData => ({...prevData, [modalName]: condition}))
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    try {
      async function fetchData() {
        const response = await fetch("http://localhost:3000/meals", {
          method: "GET",
        });
        const resDdata = await response.json();
         setData(prevData => ({...prevData, data:resDdata}))
        setLoading(false);
      }
  
      fetchData();
    } catch(err) {
      alert(err);
    }
  }, []);

  return (
    <main>
      <Header
        numberOfItems="4"
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
