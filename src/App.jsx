import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList.jsx";

// The main component that holds the state for the list of
// products and passes data as props to child components.
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "../public/iphone15pro.jpg",
      name: "Apple iPhone 15 Pro",
      category: "Electronics",
      price: 999,
      description:
        "Latest Apple flagship smartphone with advanced camera system.",
    },
    {
      id: 2,
      image: "../public/nikeairmax270.jpg",
      name: "Nike Air Max 270",
      category: "Footwear",
      price: 150,
      description: "Comfortable and stylish running shoes from Nike.",
    },
    {
      id: 3,
      image: "../public/levis501jeans.jpg",
      name: "Levi's 501 Original Jeans",
      category: "Clothing",
      price: 60,
      description: "Classic straight fit jeans for everyday wear.",
    },
    {
      id: 4,
      image: "../public/samsung4kuhdtv.jpg",
      name: "Samsung 4K UHD TV",
      category: "Electronics",
      price: 450,
      description: "Ultra HD smart TV with vibrant colors and streaming apps.",
    },
    {
      id: 5,
      image: "../public/instantpotduo.jpg",
      name: "Instant Pot Duo 7-in-1",
      category: "Home Appliances",
      price: 89,
      description: "Multi-use programmable pressure cooker for fast meals.",
    },
    {
      id: 6,
      image: "../public/harrypotterboxset.jpg",
      name: "Harry Potter Box Set",
      category: "Books",
      price: 80,
      description: "Complete collection of the Harry Potter series.",
    },
    {
      id: 7,
      image: "../public/adidasbackpack.jpg",
      name: "Adidas Classic Backpack",
      category: "Accessories",
      price: 35,
      description: "Durable backpack for school, work, or travel.",
    },
    {
      id: 8,
      image: "../public/sonywh1000xm5.jpg",
      name: "Sony WH-1000XM5 Headphones",
      category: "Electronics",
      price: 299,
      description: "Industry-leading noise cancelling wireless headphones.",
    },
    {
      id: 9,
      image: "../public/kitchenaidmixer.jpg",
      name: "KitchenAid Stand Mixer",
      category: "Home Appliances",
      price: 399,
      description: "Versatile stand mixer for baking and cooking needs.",
    },
    {
      id: 10,
      image: "../public/northfacepuffer.jpg",
      name: "The North Face Puffer Jacket",
      category: "Clothing",
      price: 180,
      description: "Warm and lightweight jacket for cold weather.",
    },
  ]);
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
