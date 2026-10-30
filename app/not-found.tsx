import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-amber-600">404</h1>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
          Product Not Found
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          The tool or equipment you are looking for does not exist or has been removed from the ShipYard catalog.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm"
          >
            Return to Catalog
          </Link>
        </div>
      </div>
    </main>
  );
}