
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">T</span>
          TeamUp
        </div>

        <div className="nav-links">
          <a href="#events">Browse Events</a>
          <a href="#teammates">Find Teammates</a>
          <a href="#about">About</a>
        </div>

        <button className="login-btn">Log in</button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">BUILD TOGETHER</p>

            <h1>
              Find the right people.
              <br />
              <span>Build something great.</span>
            </h1>

            <p className="hero-text">
              TeamUp helps college students find teammates for hackathons,
              competitions, and events based on their skills, interests, and
              availability.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Find Teammates →</button>
              <button className="secondary-btn">Explore Events</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <div>
                <p className="card-label">YOUR NEXT TEAM</p>
                <h3>Smart India Hackathon</h3>
              </div>

              <span className="verified">✓ Verified</span>
            </div>

            <div className="match">
              <div className="avatar">A</div>

              <div className="match-info">
                <strong>Aarav Sharma</strong>
                <span>Python · Machine Learning</span>
              </div>

              <div className="match-score">94%</div>
            </div>

            <div className="match">
              <div className="avatar avatar-two">P</div>

              <div className="match-info">
                <strong>Priya Singh</strong>
                <span>UI/UX · Figma</span>
              </div>

              <div className="match-score">89%</div>
            </div>

            <div className="match">
              <div className="avatar avatar-three">R</div>

              <div className="match-info">
                <strong>Rohan Mehta</strong>
                <span>React · Node.js</span>
              </div>

              <div className="match-score">86%</div>
            </div>
          </div>
        </section>

        <section className="features" id="about">
          <div className="feature">
            <div className="feature-icon">⌕</div>

            <h3>Find your match</h3>

            <p>
              Discover students whose skills and interests complement yours.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">◇</div>

            <h3>Verified events</h3>

            <p>
              Connect teams with real competitions through official event
              links.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">↗</div>

            <h3>Build together</h3>

            <p>
              Form your team, collaborate, and turn your ideas into reality.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


