import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
        <h1 className="text-2xl font-medium text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/products" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
