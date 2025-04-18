import Weather from "./components/Weather.jsx"
import UserStatus from "./components/UserStatus.jsx";
import Greeting from "./components/Greeting.jsx";

const App = () => {

  return (
    <div>
      <Weather temperature={20} />
      <UserStatus isAdmin={true} loggedIn={true} />
      <Greeting timeOfDay="morning" />
    </div>
  );

};

export default App;