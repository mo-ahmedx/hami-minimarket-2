import { useState } from "react";
import Card from "../components/FruitCard.jsx";

export default function Products({addToCart}) {
  // 1. Your product data
  const products = [
    {
      id: 1,
      cat: "Vegetable",
      title: "Carrot",
      img: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=",
      description: "Fresh, crunchy, and naturally sweet.",
      price: 1.9,
      oldPrice: 2.49,
    },
    {
      id: 2,
      cat: "Fruit",
      title: "Apple",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      description: "Crisp and juicy red apples.",
      price: 2.5,
      oldPrice: 3.0,
    },
    {
      id: 3,
      cat: "Vegetable",
      title: "Tomato",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
      description: "Fresh tomatoes for salads and cooking.",
      price: 1.2,
      oldPrice: 1.8,
    },

    {
    id: 4,
    cat: "Vegetable",
    title: "Broccoli",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
    description: "Rich in nutrients and perfect for healthy meals.",
    price: 2.1,
    oldPrice: 2.6,
    },

// Reliable placeholder images (will always load)
{
  id: 5,
  cat: "Vegetable",
  title: "Cucumber",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmqFh3ur0TcaCJqRv0IuUHLXiU0_Ne3kINQ&s", // stable placeholder
  description: "Refreshing and hydrating, great for salads.",
  price: 1.0,
  oldPrice: 1.4,
},

{
  id: 6,
  cat: "Vegetable",
  title: "Lettuce",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SBhWPxOQvHLeTBrPuM33noFKNVaHtP4mNw&s", // stable placeholder
  description: "Crisp leafy greens for salads and wraps.",
  price: 1.5,
  oldPrice: 2.0,
},


{
  id: 7,
  cat: "Fruit",
  title: "Banana",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  description: "Naturally sweet and full of energy.",
  price: 1.1,
  oldPrice: 1.4,
},

{
  id: 8,
  cat: "Fruit",
  title: "Orange",
  img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
  description: "Juicy citrus packed with vitamin C.",
  price: 1.8,
  oldPrice: 2.3,
},

{
  id: 9,
  cat: "Fruit",
  title: "Grapes",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UtrpPyYy_9wEWxUEybi3stLiEg3sSEfgiQ&s", // stable placeholder
  description: "Sweet and seedless grapes, perfect for snacking.",
  price: 2.9,
  oldPrice: 3.4,
},

{
  id: 10,
  cat: "Fruit",
  title: "Strawberry",
  img: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
  description: "Fresh and sweet strawberries full of flavor.",
  price: 3.2,
  oldPrice: 5,
}


  ];


  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const  [maxPrice, setMaxPrice] = useState(5);


  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" ? true : p.cat === category;
    const matchesPrice = p.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-softBlue/20 p-4">
      <h1 className="text-center font-heading text-lg mb-4">Our Products</h1>

      <input
        type="text"
        placeholder="Search your favorite products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-1 mb-3 w-full md:w-1/3 rounded-xl onChange: outline-primaryBlue"
      />

      <div className="mt-3">
            <input 
            type="range"
            min="0"
            max="5"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full md:w-1/3"
            />
            <span className="ml-2 text-sm">
                Max Price : ${maxPrice.toFixed(2)}
            </span>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-1 ml-2 mb-3 rounded-lg onChange: outline-primaryBlue"
      >
        <option value="All">All</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Fruit">Fruit</option>
      </select>

      <div className="md:grid md:grid-cols-5 gap-2">
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            cat={item.cat}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
            oldPrice={item.oldPrice}
            onOrder={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
