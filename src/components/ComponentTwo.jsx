


export const ComponentOne = ({count, onClickHandler}) => {

  const handleClick = () => {
    onClickHandler();
  }

  return <div>
    <p>{count}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
}

export const ComponentTwo = ({count, onClickHandler}) => {
  const handleClick = () => {
    onClickHandler();
  }

  return <div>
    <p>{count}</p>
    <button onClick={handleClick}>+</button>
  </div>
}
w