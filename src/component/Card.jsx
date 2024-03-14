export default function Card({id, name, price, description, image, selectedItem,  setData}) {
   const handleCart = () => {   

    if (selectedItem.some(item => item.id === id)) {
      console.log('already existed');
    } else {
      console.log('adding this new item because it does not exist');
      setData(prevData=> ({...prevData, selectedItem:[...prevData.selectedItem, {id, name, price, quantity:1}]}))
    }
  }
  return (
      <div className="meal-item">
        <img src={`http://localhost:3000/${image} `} alt="mealItem" />
        <h3>{name}</h3>
        <p className="meal-item-price">${price}</p>
        <p className="meal-item-descripiton">
          {description}
        </p>
        <button className="button" onClick={handleCart}>Add To Cart</button>
      </div>
  );
}
