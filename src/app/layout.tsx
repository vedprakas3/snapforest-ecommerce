import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SNAPFOREST - Elevate Everyday Essentials",
  description: "Luxury Simplified. Premium fashion and lifestyle products.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-wider">SNAPFOREST</a>
            <nav className="flex gap-6">
              <a href="/" className="text-sm font-medium hover:text-gray-600">Home</a>
              <a href="/products" className="text-sm font-medium hover:text-gray-600">Shop</a>
              <a href="/cart" className="text-sm font-medium hover:text-gray-600">Cart</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-50 border-t py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-2xl font-bold tracking-wider mb-4">SNAPFOREST</p>
            <p className="text-gray-600 text-sm">Elevate Everyday Essentials. Luxury Simplified.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
