import {useState} from "react";

const ShoppingList = () => {
  const [card, setCard] = useState([]);
  const cardObj = {
    name: "",
    quantity: 0
  };

  const handleClick = () => {
    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;

    const newObj = {
      name: name,
      quantity: quantity
    };

    const newCard = [...card, newObj];
    setCard(newCard);
  };

  return (
    <div>
      <input
        type="text"
        id="name"
        name="name" // ✅ needed for dynamic key
        placeholder="Enter name"
      />

      <input
        type="number"
        id="quantity"
        name="quantity" // ✅ needed for dynamic key
        placeholder="Enter quantity"
      />
      <button onClick={handleClick}>Add to card</button>

      <div>
        {card.map((item) => (
          <div key={Math.random()}>{item.name} - {item.quantity}</div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;