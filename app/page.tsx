'use client';

interface Burger {
  id: number;
  name: string;
  image: string;
  price: number;
}

const burgers: Burger[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    price: 8.99,
  },
  {
    id: 2,
    name: "Bacon Burger",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
    price: 10.99,
  },
  {
    id: 3,
    name: "Mushroom Swiss Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    price: 9.99,
  },
  {
    id: 4,
    name: "Double Deluxe",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
    price: 12.99,
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    price: 10.49,
  },
  {
    id: 6,
    name: "Gourmet Premium",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    price: 13.99,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-black">
      {/* Header */}
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">🍔 Burger Store</h1>
          <p className="text-center text-amber-100 mt-2">Delicious handcrafted burgers</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {burgers.map((burger) => (
            <div
              key={burger.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Burger Image */}
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Burger Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {burger.name}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-500">
                    ${burger.price.toFixed(2)}
                  </span>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
