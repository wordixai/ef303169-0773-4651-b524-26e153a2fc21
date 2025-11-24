import { ProductCard } from "./ProductCard";

const products = [
  {
    title: "复古T恤",
    price: "¥299",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    badge: "HOT!"
  },
  {
    title: "波普夹克",
    price: "¥799",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    badge: "NEW"
  },
  {
    title: "艺术帆布包",
    price: "¥199",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop"
  },
  {
    title: "潮流运动鞋",
    price: "¥899",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    badge: "SALE"
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 
          className="text-5xl md:text-6xl font-black text-center mb-16 comic-text"
        >
          热门商品
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};