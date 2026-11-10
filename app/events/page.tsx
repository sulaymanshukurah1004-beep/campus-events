
"use client";

import { useState } from "react";

const events = [
  { id: 1, title: "Campus Tech Innovation Summit", category: "Technology", date: "15 NOV, 2026", time: "10:00 AM", venue: "University Auditorium", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900", description: "Discover new ideas, technology and innovation.", color: "purple" },
  { id: 2, title: "Interfaculty Football Tournament", category: "Sports", date: "18 NOV, 2026", time: "3:00 PM", venue: "University Sports Field", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900", description: "Watch your favourite faculties compete for glory.", color: "green" },
  { id: 3, title: "MSSN Nigeria Summit", category: "Faith", date: "20 NOV, 2026", time: "9:00 AM", venue: "Main Campus Mosque", image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900", description: "A gathering for learning, faith and meaningful connections.", color: "orange" },
  { id: 4, title: "Campus Dinner Party", category: "Social", date: "22 NOV, 2026", time: "5:00 PM", venue: "Students' Centre", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900", description: "An evening of good food, music and unforgettable memories.", color: "pink" },
];

export default function EventsPage() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = events.filter((event) =>
    (selected === "All" || event.category === selected) &&
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <header className="navbar">
        <div className="nav-container">
          <a href="/" className="logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <nav className="nav-links">
            <a href="/">Home</a><a href="/events" className="active">Explore Events</a>
            <a href="/categories">Categories</a><a href="/about">About Us</a>
          </nav>
          <a href="/my-events" className="saved-link">♡ My Events</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">DON'T MISS OUT</span>
          <h1>Discover What's<br /><span>Happening.</span></h1>
          <p>Find exciting campus events, explore new interests and make memories with your university community.</p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1100" alt="Campus event" />
        </div>
      </section>

      <section className="events-section">
        <div className="section-heading events-heading">
          <div>
            <span className="section-label">YOUR CAMPUS CALENDAR</span>
            <h2>Upcoming Events</h2>
            <p>Find your next favourite campus experience.</p>
          </div>
        </div>

        <div className="event-filters">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for an event..." />
          <div className="filter-buttons">
            {["All", "Technology", "Sports", "Faith", "Social"].map((item) => (
              <button key={item} onClick={() => setSelected(item)} className={selected === item ? "active" : ""}>{item}</button>
            ))}
          </div>
        </div>

        <div className="events-grid">
          {filtered.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span className={`event-category ${event.color}`}>{event.category}</span>
              </div>
              <div className="event-content">
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-info">
                  <span>◷ {event.time}</span>
                  <span>⌖ {event.venue}</span>
                </div>
                <div className="event-footer">
                  <a href={`/events/${event.id}`} className="details-link">View Details →</a>
                  <button className="save-button" type="button" disabled>♡</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty-message">No events found. Try another search.</p>}
      </section>

      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo footer-logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <p>Bringing campus communities together, one event at a time.</p>
          <div className="footer-links"><a href="/">Home</a><a href="/categories">Categories</a><a href="/about">About</a><a href="/my-events">My Events</a></div>
        </div>
        <div className="copyright">© 2026 CampusConnect. Made for campus communities.</div>
      </footer>
    </main>
  );
}
