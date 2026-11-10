
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Campus Tech Innovation Summit",
    category: "Technology",
    date: "2026-11-15",
    time: "10:00 AM",
    venue: "University Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description: "Discover new ideas, technology and innovation.",
  },
  {
    id: 2,
    title: "Interfaculty Football Tournament",
    category: "Sports",
    date: "2026-11-18",
    time: "3:00 PM",
    venue: "University Sports Field",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description: "Watch your favourite faculties compete for glory.",
  },
  {
    id: 3,
    title: "MSSN Nigeria Summit",
    category: "Faith",
    date: "2026-11-20",
    time: "9:00 AM",
    venue: "Main Campus Mosque",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900",
    description: "A gathering for learning, faith and meaningful connections.",
  },
  {
    id: 4,
    title: "Campus Dinner Party",
    category: "Social",
    date: "2026-11-22",
    time: "5:00 PM",
    venue: "Students' Centre",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    description: "An evening of food, music and unforgettable memories.",
  },
  {
    id: 5,
    title: "MSSN Sisters' Halaqah",
    category: "Faith",
    date: "2026-11-25",
    time: "11:00 AM",
    venue: "Islamic Centre",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=900",
    description: "A beautiful gathering for Islamic learning and sisterhood.",
  },
  {
    id: 6,
    title: "Interfaculty Basketball Championship",
    category: "Sports",
    date: "2026-11-27",
    time: "2:00 PM",
    venue: "University Sports Complex",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900",
    description: "Experience the excitement of campus basketball.",
  },
  {
    id: 7,
    title: "MSSN Islamic Knowledge & Qur'an Quiz",
    category: "Faith",
    date: "2026-11-29",
    time: "10:00 AM",
    venue: "Main Campus Mosque",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900",
    description: "Test your knowledge and deepen your understanding of Islam.",
  },
  {
    id: 8,
    title: "MSSN Community Networking Dinner",
    category: "Social",
    date: "2026-12-02",
    time: "6:00 PM",
    venue: "University Conference Hall",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    description: "Connect with fellow students and build meaningful relationships.",
  },
];

const categories = ["All", "Technology", "Sports", "Faith", "Social"];

const categoryColors: Record<string, string> = {
  Technology: "purple",
  Sports: "green",
  Faith: "orange",
  Social: "pink",
};

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

  return (
    <main className="explore-page">
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-icon">✦</span>
            Campus<span>Connect</span>
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/events" className="active">
              Explore Events
            </Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/#about">About Us</Link>
          </nav>

          <Link href="/my-events" className="saved-link">
            ♡ My Events
          </Link>
        </div>
      </header>

      <section className="explore-hero">
        <span className="section-label">DISCOVER YOUR CAMPUS</span>
        <h1>Explore Campus Events</h1>
        <p>
          Find exciting activities, meet new people and discover
          experiences happening around your campus.
        </p>
      </section>

      <section className="explore-content">
        <div className="explore-top">
          <div>
            <h2>All Events</h2>
            <p>Find something exciting to be part of.</p>
          </div>

          <span className="event-count">
            {filteredEvents.length} Events Found
          </span>
        </div>

        <div className="filter-panel">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search events by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
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
            aria-label="Sort events by date"
          >
            <option value="soonest">Earliest First</option>
            <option value="latest">Latest First</option>
          </select>
        </div>

        <div className="category-pills">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={category === item ? "selected-pill" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span
                    className={`event-category ${categoryColors[event.category]}`}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="event-content">
                  <span className="event-date">
                    {new Date(event.date + "T12:00:00").toLocaleDateString(
                      "en-US",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>

                  <div className="event-info">
                    <span>◷ {event.time}</span>
                    <span>⌖ {event.venue}</span>
                  </div>

                  <div className="event-footer">
                    <Link
                      href={`/events/${event.id}`}
                      className="details-link"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-events">
            <span>🔎</span>
            <h3>No events found</h3>
            <p>Try another search or choose a different category.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSortOrder("soonest");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="logo footer-logo">
            <span className="logo-icon">✦</span>
            Campus<span>Connect</span>
          </Link>
          <p>Bringing campus communities together, one event at a time.</p>

          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/my-events">My Events</Link>
          </div>
        </div>

        <div className="copyright">
          © 2026 CampusConnect. Made for campus communities.
        </div>
      </footer>
    </main>
  );
}
