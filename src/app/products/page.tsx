const products = [
  { id: "1", name: "True LS", price: 1749, category: "Accessories", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" },
  { id: "2", name: "Footwear", price: 2499, category: "Apparel", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { id: "3", name: "Apparel", price: 9999, category: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop" },
  { id: "4", name: "Denim", price: 1249, category: "Denim", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-8">All Products</h1>
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
    </div>
  );
}
