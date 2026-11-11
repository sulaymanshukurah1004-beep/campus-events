
export default function AboutPage() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">✦</span>
            Campus<span>Connect</span>
          </a>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/events">Explore Events</a>
            <a href="/categories">Categories</a>
            <a href="/about" className="active">About Us</a>
          </nav>
          <a href="/my-events" className="saved-link">♡ My Events</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">GET TO KNOW US</span>
          <h1>More Than Events.<br /><span>We're Community.</span></h1>
          <p>CampusConnect brings students closer to campus activities, meaningful experiences and the people who make university life memorable.</p>
          <div className="hero-actions">
            <a href="/events" className="primary-btn">Explore Events →</a>
            <a href="#mission" className="secondary-btn">Our Mission</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1100" alt="University students working together outdoors" />
        </div>
      </section>

      <section className="about-section" id="mission">
        <div className="about-content">
          <span className="section-label">WHO WE ARE</span>
          <h2>Making Every Campus Experience Count.</h2>
          <p>We believe university life should be full of discovery, connection and unforgettable moments. CampusConnect makes it easier for students to find events and participate in activities happening around their campus.</p>
          <a href="/events" className="primary-btn">Discover Events →</a>
        </div>
        <div className="about-decoration">
          <span>🎓</span><span>🤝</span><span>✨</span>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <div>
            <span className="section-label">WHAT DRIVES US</span>
            <h2>Our Mission & Vision</h2>
            <p>Building a more connected and active student community.</p>
          </div>
        </div>
        <div className="category-grid">
          <div className="category-card">
            <span className="category-icon">🎯</span>
            <div><h3>Our Mission</h3><p>To make campus events easier to discover and help students get involved.</p></div>
          </div>
          <div className="category-card">
            <span className="category-icon">🌟</span>
            <div><h3>Our Vision</h3><p>A university community where every student feels connected and included.</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo footer-logo"><span className="logo-icon">✦</span>Campus<span>Connect</span></a>
          <p>Bringing campus communities together, one event at a time.</p>
          <div className="footer-links">
            <a href="/">Home</a><a href="/events">Events</a><a href="/categories">Categories</a><a href="/my-events">My Events</a>
          </div>
        </div>
        <div className="copyright">© 2026 CampusConnect. Made for campus communities.</div>
      </footer>
    </main>
  );
}
