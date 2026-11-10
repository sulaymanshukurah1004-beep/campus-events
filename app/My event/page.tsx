
"use client";

import { useState } from "react";
import Link from "next/link";

const initialEvents = [
  {
    id: 1,
    title: "Campus Tech Innovation Summit",
    category: "Technology",
    date: "November 15, 2026",
    time: "10:00 AM",
    venue: "University Auditorium",
  },
  {
    id: 2,
    title: "Interfaculty Football Tournament",
    category: "Sports",
    date: "November 18, 2026",
    time: "3:00 PM",
    venue: "University Sports Field",
  },
  {
    id: 3,
    title: "MSSN Nigeria Summit",
    category: "Faith",
    date: "November 20, 2026",
    time: "9:00 AM",
    venue: "Main Campus Mosque",
  },
];

export default function MyEventsPage() {
  const [savedEvents, setSavedEvents] = useState(initialEvents);

  function removeEvent(id: number) {
    setSavedEvents((previousEvents) =>
      previousEvents.filter((event) => event.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            Campus<span className="text-purple-600">Connect</span>
          </Link>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/events">Explore Events</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About Us</Link>
          </nav>

          <Link href="/my-events" className="rounded-lg bg-purple-100 px-5 py-3 text-sm font-bold text-purple-700">
            My Events
          </Link>
        </div>
      </header>

      <section className="bg-purple-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-purple-600">
            Your Personal Collection
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            My Events ♡
          </h1>

          <p className="mt-4 text-gray-600">
            Keep track of the campus events you are interested in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Saved Events</h2>

          <span className="rounded-full bg-purple-100 px-5 py-3 text-sm font-bold text-purple-700">
            {savedEvents.length} Saved
          </span>
        </div>

        {savedEvents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-bold text-purple-700">
                  {event.category}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {event.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>🕒 {event.time}</p>
                  <p>📍 {event.venue}</p>
                </div>

                <button
                  onClick={() => removeEvent(event.id)}
                  className="mt-7 w-full rounded-lg border border-red-200 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                >
                  Remove from My Events
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
            <div className="text-5xl">♡</div>
            <h3 className="mt-5 text-2xl font-bold">
              No Saved Events Yet
            </h3>
            <p className="mt-3 text-gray-500">
              Explore campus events and start saving the ones you like.
            </p>

            <Link
              href="/events"
              className="mt-7 inline-block rounded-lg bg-purple-600 px-7 py-3 font-bold text-white hover:bg-purple-700"
            >
              Explore Events
            </Link>
          </div>
        )}

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
