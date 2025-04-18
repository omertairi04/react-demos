import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import Card from "./components/Card.jsx";
const App = () => {

  return (
    <div>
      <Card>
        <h1>My card</h1>
        <p>Some content for card 1</p>
      </Card>
      <Card>
        <h1>My card 2</h1>
        <p>Some content for card 2</p>
      </Card>
      <Card>
        <h1>My card 3</h1>
        <p>Some content for card 3</p>
      </Card>
    </div>
  );

};

export default App;