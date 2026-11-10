
import Link from "next/link";

const categories = [
  {
    name: "Technology",
    icon: "💻",
    description: "Discover tech events, workshops, coding competitions and innovation.",
    color: "bg-purple-100",
    text: "text-purple-700",
  },
  {
    name: "Sports",
    icon: "⚽",
    description: "Find football matches, basketball games and sporting activities.",
    color: "bg-green-100",
    text: "text-green-700",
  },
  {
    name: "Faith",
    icon: "🕌",
    description: "Join religious gatherings, study circles and spiritual programmes.",
    color: "bg-orange-100",
    text: "text-orange-700",
  },
  {
    name: "Social",
    icon: "🎉",
    description: "Enjoy parties, dinners, networking and student hangouts.",
    color: "bg-pink-100",
    text: "text-pink-700",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="border-b">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            Campus<span className="text-purple-600">Connect</span>
          </Link>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/events">Explore Events</Link>
            <Link href="/categories" className="text-purple-600">Categories</Link>
            <Link href="/about">About Us</Link>
          </nav>

          <Link href="/my-events" className="rounded-lg bg-purple-100 px-5 py-3 text-sm font-bold text-purple-700">
            My Events
          </Link>
        </div>
      </header>

      <section className="bg-purple-50 px-6 py-20 text-center">
        <p className="font-bold uppercase tracking-widest text-purple-600">
          Find Your Interest
        </p>
        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Explore Categories
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Whatever your interests are, there is something happening
          on campus for you.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-3 text-3xl font-extrabold">Browse by Category</h2>
        <p className="mb-10 text-gray-500">
          Choose a category and discover exciting campus activities.
        </p>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-gray-100 p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${category.color}`}>
                {category.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {category.name}
              </h3>

              <p className="mt-3 min-h-20 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              <Link
                href={`/events?category=${encodeURIComponent(category.name)}`}
                className={`mt-6 inline-block font-bold ${category.text}`}
              >
                Explore Events →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-10 text-center text-white">
        <h2 className="text-2xl font-bold">
          Campus<span className="text-purple-400">Connect</span>
        </h2>
        <p className="mt-3 text-sm text-gray-400">
          Bringing campus communities together.
        </p>
        <p className="mt-6 text-xs text-gray-500">
          © 2026 CampusConnect. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
