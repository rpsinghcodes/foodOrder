import { createContext, useState, useEffect } from "react";

export const changeData = createContext({
  data: { data: [], selectedItem: [] },
  modal: {},
  setData: () => {},
  handleModal: {},
  loading: true,
});

export default function HandleState({ children }) {
  const [data, setData] = useState({ data: [], selectedItem: [] });
  const [modal, setModal] = useState({
    cart: false,
    checkOut: false,
    success: false,
  });
  const [loading, setLoading] = useState(true);

  const handleModal = (modalName, condition) => {
    setModal((prevData) => ({ ...prevData, [modalName]: condition }));
  };

  useEffect(() => {
    try {
      console.log("Hello");
      async function fetchData() {
        const response = await fetch("http://localhost:3000/meals", {
          method: "GET",
        });
        const resDdata = await response.json();
        setData((prevData) => ({ ...prevData, data: resDdata }));
        setLoading(false);
      }

      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  console.log(data);
  const value = {
    data: data,
    selectedItem: data.selectedItem,
    setData: setData,
    loading: loading,
    modal: modal,
    handleModal: handleModal,
  };

  return <changeData.Provider value={value}>{children}</changeData.Provider>;
}
