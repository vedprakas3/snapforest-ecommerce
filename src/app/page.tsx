import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { id: "1", name: "True LS", price: 1749, category: "Accessories", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" },
  { id: "2", name: "Footwear", price: 2499, category: "Apparel", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { id: "3", name: "Apparel", price: 9999, category: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop" },
  { id: "4", name: "Denim", price: 1249, category: "Denim", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0 order-2 lg:order-1">
              <div className="max-w-xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight text-gray-900 mb-4">
                  Elevate<br/>Everyday<br/>Essentials
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light">Luxury Simplified.</p>
                <Link href="/products" className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all group">
                  Shop Now<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop" alt="Fashion Model" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-3">Bestsellers</h2>
            <p className="text-gray-600 text-lg">Discover the latest handpicked for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded-full">{product.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-3">₹{product.price.toLocaleString('en-IN')}</p>
                  <button className="w-full py-3 px-4 bg-gray-900 text-white font-medium text-sm rounded-lg hover:bg-gray-800">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
