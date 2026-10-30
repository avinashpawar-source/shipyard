import Link from "next/link";
import Image from "next/image";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
    >
      <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-5">
        <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            ${product.price}
          </span>
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
            View Specs &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}