
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699"
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200"
    },
    {
      id: 3,
      name: "Headphone",
      price: "$400"
    }
  ]

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList;