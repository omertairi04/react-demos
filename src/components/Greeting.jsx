const Greeting = () => {
  const date = new Date();
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Date {date.getDate()}</p>
    </div>
  );
};

export default Greeting;