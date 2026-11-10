
const categories = [
  { name: "Technology", icon: "💻", description: "Innovation, coding, workshops and technology." },
  { name: "Sports", icon: "⚽", description: "Games, tournaments and sporting competitions." },
  { name: "Faith", icon: "🕌", description: "Spiritual gatherings, learning and reflection." },
  { name: "Social", icon: "🎉", description: "Parties, celebrations and student connections." },
];

export default function CategoriesPage() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-container">
          <a href="/" className="logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <nav className="nav-links">
            <a href="/">Home</a><a href="/events">Explore Events</a>
            <a href="/categories" className="active">Categories</a><a href="/about">About Us</a>
          </nav>
          <a href="/my-events" className="saved-link">♡ My Events</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">FIND WHAT INTERESTS YOU</span>
          <h1>Something For<br /><span>Everyone.</span></h1>
          <p>Explore different categories and find campus experiences that match your interests.</p>
          <div className="hero-actions">
            <a href="/events" className="primary-btn">Browse All Events →</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1100" alt="Students enjoying campus life" />
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE YOUR INTERESTS</span>
            <h2>Browse Categories</h2>
            <p>Choose an interest and discover what's happening.</p>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a href="/events" className="category-card" key={category.name}>
              <span className="category-icon">{category.icon}</span>
              <div><h3>{category.name}</h3><p>{category.description}</p></div>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <span className="section-label">YOUR NEXT EXPERIENCE</span>
          <h2>Ready to Find Something Exciting?</h2>
          <p>Explore upcoming campus events and become part of the moments that matter.</p>
          <a href="/events" className="primary-btn">Explore Events →</a>
        </div>
        <div className="about-decoration"><span>🎓</span><span>✨</span><span>🤝</span></div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo footer-logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <p>Bringing campus communities together, one event at a time.</p>
          <div className="footer-links">
            <a href="/">Home</a><a href="/events">Events</a><a href="/about">About</a><a href="/my-events">My Events</a>
          </div>
        </div>
        <div className="copyright">© 2026 CampusConnect. Made for campus communities.</div>
      </footer>
    </main>
  );
}
