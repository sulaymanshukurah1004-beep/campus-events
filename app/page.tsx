
const events = [
  {
    id: 1,
    title: "Campus Tech Innovation Summit",
    category: "Technology",
    date: "15 NOV, 2026",
    time: "10:00 AM",
    venue: "University Auditorium",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description: "Discover new ideas, technology and innovation.",
    color: "purple",
  },
  {
    id: 2,
    title: "Interfaculty Football Tournament",
    category: "Sports",
    date: "18 NOV, 2026",
    time: "3:00 PM",
    venue: "University Sports Field",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description: "Watch your favourite faculties compete for glory.",
    color: "green",
  },
  {
    id: 3,
    title: "MSSN Nigeria Summit",
    category: "Faith",
    date: "20 NOV, 2026",
    time: "9:00 AM",
    venue: "Main Campus Mosque",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900",
    description: "A gathering for learning, faith and meaningful connections.",
    color: "orange",
  },
  {
    id: 4,
    title: "Campus Dinner Party",
    category: "Social",
    date: "22 NOV, 2026",
    time: "5:00 PM",
    venue: "Students' Centre",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    description: "An evening of good food, music and unforgettable memories.",
    color: "pink",
  },
];

const categories = [
  { name: "Technology", icon: "💻", count: "Innovation & ideas" },
  { name: "Sports", icon: "⚽", count: "Games & competitions" },
  { name: "Faith", icon: "🕌", count: "Spiritual gatherings" },
  { name: "Social", icon: "🎉", count: "Fun & connections" },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">✦</span>
            Campus<span>Connect</span>
          </a>

          <nav className="nav-links">
            <a href="../home" className="active">Home</a>
            <a href="../explore-events">Explore Events</a>
            <a href="../categories">Categories</a>
            <a href="../about">About Us</a>
          </nav>

          <a href="../my-events" className="saved-link">
            ♡ My Events
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">YOUR CAMPUS. YOUR COMMUNITY.</span>

          <h1>
            Every Campus Moment
            <br />
            <span>Starts With You.</span>
          </h1>

          <p>
            Discover exciting campus events, meet amazing people and never
            miss a moment worth remembering.
          </p>

          <div className="hero-actions">
            <a href="#events" className="primary-btn">
              Explore Events <span>→</span>
            </a>
            <a href="#about" className="secondary-btn">
              Learn More
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>50+</strong>
              <span>Campus Events</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Event Categories</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Connected Community</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1100"
            alt="University students gathered at a campus event"
          />
          <div className="floating-card">
            <span className="floating-icon">🎓</span>
            <div>
              <strong>Make Memories</strong>
              <p>Be part of something amazing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="section-label">FIND YOUR INTEREST</span>
            <h2>Explore by Category</h2>
            <p>Whatever you're interested in, there's something for you.</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              href="#events"
              className="category-card"
              key={category.name}
            >
              <span className="category-icon">{category.icon}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="events-section" id="events">
        <div className="section-heading events-heading">
          <div>
            <span className="section-label">DON'T MISS OUT</span>
            <h2>Upcoming Events</h2>
            <p>Find your next favourite campus experience.</p>
          </div>

          <a href="/events" className="view-all">
            View All Events →
          </a>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span className={`event-category ${event.color}`}>
                  {event.category}
                </span>
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
                  <a href={`/events/${event.id}`} className="details-link">
                    View Details <span>→</span>
                  </a>
                  <button
                    type="button"
                    className="save-button"
                    aria-label={`Save ${event.title}`}
                    disabled
                    title="Save functionality will be added in a later step"
                  >
                    ♡
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-content">
          <span className="section-label">ABOUT CAMPUSCONNECT</span>
          <h2>Your Campus Life Deserves to Be Experienced.</h2>
          <p>
            CampusConnect brings students closer to the events, activities
            and experiences happening around their university. Discover
            opportunities, build friendships and create memories.
          </p>
          <a href="#events" className="primary-btn">
            Find Your Next Event →
          </a>
        </div>

        <div className="about-decoration">
          <span>🎓</span>
          <span>🤝</span>
          <span>✨</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo footer-logo">
            <span className="logo-icon">✦</span>
            Campus<span>Connect</span>
          </a>
          <p>Bringing campus communities together, one event at a time.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
            <a href="/my-events">My Events</a>
          </div>
        </div>
        <div className="copyright">
          © 2026 CampusConnect. Made for campus communities.
        </div>
      </footer>
    </main>
  );
}
