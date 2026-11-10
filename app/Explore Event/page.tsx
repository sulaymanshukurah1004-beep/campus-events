
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Campus Tech Innovation Summit",
    category: "Technology",
    date: "November 15, 2026",
    time: "10:00 AM",
    venue: "University Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description: "Discover new ideas, technology and innovation.",
  },
  {
    id: 2,
    title: "Interfaculty Football Tournament",
    category: "Sports",
    date: "November 18, 2026",
    time: "3:00 PM",
    venue: "University Sports Field",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description: "Watch your favourite faculties compete for glory.",
  },
  {
    id: 3,
    title: "MSSN Nigeria Summit",
    category: "Faith",
    date: "November 20, 2026",
    time: "9:00 AM",
    venue: "Main Campus Mosque",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900",
    description: "A gathering for learning, faith and meaningful connections.",
  },
  {
    id: 4,
    title: "Campus Dinner Party",
    category: "Social",
    date: "November 22, 2026",
    time: "5:00 PM",
    venue: "Students' Centre",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    description: "An evening of food, music and unforgettable memories.",
  },
  {
    id: 5,
    title: "MSSN Sisters' Halaqah",
    category: "Faith",
    date: "November 25, 2026",
    time: "11:00 AM",
    venue: "Islamic Centre",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=900",
    description: "A gathering for Islamic learning and sisterhood.",
  },
  {
    id: 6,
    title: "Interfaculty Basketball Championship",
    category: "Sports",
    date: "November 27, 2026",
    time: "2:00 PM",
    venue: "University Sports Complex",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900",
    description: "Experience the excitement of campus basketball.",
  },
  {
    id: 7,
    title: "MSSN Islamic Knowledge & Qur'an Quiz",
    category: "Faith",
    date: "November 29, 2026",
    time: "10:00 AM",
    venue: "Main Campus Mosque",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900",
    description: "Test your knowledge and deepen your understanding of Islam.",
  },
  {
    id: 8,
    title: "MSSN Community Networking Dinner",
    category: "Social",
    date: "December 2, 2026",
    time: "6:00 PM",
    venue: "University Conference Hall",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    description: "Connect with fellow students and build meaningful relationships.",
  },
];

const categories = ["All", "Technology", "Sports", "Faith", "Social"];

export default function ExploreEventsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("soonest");

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const matchesSearch = event.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesCategory =
          category === "All" || event.category === category;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const difference =
          new Date(a.date).getTime() - new Date(b.date).getTime();

        return sortOrder === "soonest" ? difference : -difference;
      });
  }, [search, category, sortOrder]);

  const categoryStyles: Record<string, string> = {
    Technology: "bg-purple-100 text-purple-700",
    Sports: "bg-green-100 text-green-700",
    Faith: "bg-orange-100 text-orange-700",
    Social: "bg-pink-100 text-pink-700",
  };

  return (
    <main className="min-h-screen bg-white text-[#19172b]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            ✦ Campus<span className="text-[#6554d9]">Connect</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500">
            <Link href="/" className="hover:text-[#6554d9]">Home</Link>
            <Link href="/events" className="text-[#6554d9]">Explore Events</Link>
            <Link href="/#categories" className="hover:text-[#6554d9]">Categories</Link>
            <Link href="/#about" className="hover:text-[#6554d9]">About Us</Link>
          </nav>

          <Link
            href="/my-events"
            className="rounded-lg bg-[#f1efff] px-5 py-3 text-sm font-bold text-[#6554d9]"
          >
            ♡ My Events
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f8f7ff] to-[#eeebff] px-6 py-20 text-center">
        <span className="text-xs font-extrabold tracking-[3px] text-[#6554d9]">
          DISCOVER YOUR CAMPUS
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
          Explore Campus Events
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500">
          Find exciting activities, meet new people and discover experiences
          happening around your campus.
        </p>
      </section>

      {/* EVENTS CONTENT */}
      <section className="mx-auto max-w-[1500px] px-6 py-16">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">All Events</h2>
            <p className="mt-2 text-sm text-gray-500">
              Find something exciting to be part of.
            </p>
          </div>

          <span className="rounded-full bg-[#f1efff] px-5 py-3 text-sm font-bold text-[#6554d9]">
            {filteredEvents.length} Events Found
          </span>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="mb-6 grid gap-4 md:grid-cols-[1fr_220px_200px]">
          <input
            type="search"
            placeholder="⌕  Search events by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#6554d9]"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm outline-none focus:border-[#6554d9]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm outline-none focus:border-[#6554d9]"
          >
            <option value="soonest">Earliest First</option>
            <option value="latest">Latest First</option>
          </select>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "border-[#6554d9] bg-[#6554d9] text-white"
                  : "border-gray-200 bg-white text-gray-500 hover:border-[#6554d9] hover:text-[#6554d9]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* EVENT CARDS */}
        {filteredEvents.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span
                    className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-bold ${
                      categoryStyles[event.category]
                    }`}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#6554d9]">
                    {event.date}
                  </p>

                  <h3 className="mt-3 min-h-[55px] text-xl font-bold">
                    {event.title}
                  </h3>

                  <p className="mt-2 min-h-[45px] text-sm leading-6 text-gray-500">
                    {event.description}
                  </p>

                  <div className="my-5 space-y-3 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <p>◷ {event.time}</p>
                    <p>⌖ {event.venue}</p>
                  </div>

                  <Link
                    href={`/events/${event.id}`}
                    className="block rounded-lg bg-[#6554d9] py-3 text-center text-sm font-bold text-white transition hover:bg-[#5140c5]"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#f8f7ff] px-6 py-20 text-center">
            <span className="text-5xl">🔎</span>
            <h3 className="mt-5 text-2xl font-bold">No events found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or choose a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSortOrder("soonest");
              }}
              className="mt-6 rounded-lg bg-[#6554d9] px-6 py-3 text-sm font-bold text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#19172b] px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          ✦ Campus<span className="text-[#a69aff]">Connect</span>
        </h2>

        <p className="mt-4 text-sm text-gray-400">
          Bringing campus communities together, one event at a time.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-7 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/my-events" className="hover:text-white">My Events</Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400">
          © 2026 CampusConnect. Made for campus communities.
        </div>
      </footer>
    </main>
  );
}
