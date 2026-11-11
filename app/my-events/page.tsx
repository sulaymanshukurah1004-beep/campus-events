
"use client";

import { useEffect, useState } from "react";

type SavedEvent = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  image: string;
};

export default function MyEventsPage() {
  const [savedEvents, setSavedEvents] = useState<SavedEvent[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("campusconnect-saved-events");
    if (stored) {
      try {
        setSavedEvents(JSON.parse(stored));
      } catch {
        setSavedEvents([]);
      }
    }
  }, []);

  function removeEvent(id: number) {
    const updated = savedEvents.filter((event) => event.id !== id);
    setSavedEvents(updated);
    localStorage.setItem("campusconnect-saved-events", JSON.stringify(updated));
  }

  return (
    <main>
      <header className="navbar">
        <div className="nav-container">
          <a href="/" className="logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <nav className="nav-links">
            <a href="/">Home</a><a href="/events">Explore Events</a>
            <a href="/categories">Categories</a><a href="/about">About Us</a>
          </nav>
          <a href="/my-events" className="saved-link active">♡ My Events</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR PERSONAL COLLECTION</span>
          <h1>Events Worth<br /><span>Remembering.</span></h1>
          <p>Keep your favourite campus events close. All the experiences you save will be collected here.</p>
          <div className="hero-actions">
            <a href="/events" className="primary-btn">Discover Events →</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1100" alt="Friends sharing a meal together" />
        </div>
      </section>

      <section className="events-section">
        <div className="section-heading">
          <div>
            <span className="section-label">YOUR SAVED EXPERIENCES</span>
            <h2>My Collection</h2>
            <p>Events you've chosen to keep track of.</p>
          </div>
        </div>

        {savedEvents.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">♡</span>
            <h3>No saved events yet</h3>
            <p>Explore upcoming events and save the ones you'd love to attend.</p>
            <a href="/events" className="primary-btn">Explore Events →</a>
          </div>
        ) : (
          <div className="events-grid">
            {savedEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category">{event.category}</span>
                </div>
                <div className="event-content">
                  <span className="event-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <div className="event-info">
                    <span>◷ {event.time}</span>
                    <span>⌖ {event.venue}</span>
                  </div>
                  <div className="event-footer">
                    <a href={`/events/${event.id}`} className="details-link">View Details →</a>
                    <button className="save-button" onClick={() => removeEvent(event.id)} type="button">✕</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo footer-logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <p>Bringing campus communities together, one event at a time.</p>
          <div className="footer-links"><a href="/">Home</a><a href="/events">Events</a><a href="/categories">Categories</a><a href="/about">About</a></div>
        </div>
        <div className="copyright">© 2026 CampusConnect. Made for campus communities.</div>
      </footer>
    </main>
  );
}
