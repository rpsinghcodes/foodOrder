import { useContext } from "react";
import Card from "./component/Card";
import Header from "./component/Header";
import CartModal from "./component/Modals/CartModal";
import CheckoutModal from "./component/Modals/CheckoutModal";
import SuccessModal from "./component/Modals/SuccessModal";
import { changeData } from "./data-context";

function App() {
  const { data, setData, loading } = useContext(changeData);

  return (
    <main>
      <Header />
      <SuccessModal />
      <CheckoutModal />
      <CartModal />
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
