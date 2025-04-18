
const ProductInfo = () => {
  const name = "Laptop"
  const price = 1200
  const availability = "In stock"
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Availability: {availability}</p>
    </div>
  )
}

export default ProductInfo;