
import "./App.css";
import CreatePost from "./CreatePost";
import BrowsePosts from "./BrowsePosts";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">T</span>
          TeamUp
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#create-post">Create Post</a>
          <a href="#find-teammates">Find Teammates</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR TEAM. YOUR NEXT BIG IDEA.</p>
            <h1>
              Great ideas need
              <br />
              <span>the right team.</span>
            </h1>
            <p className="hero-text">
              Find like-minded students, discover hackathons,
              and build something amazing together.
            </p>
            <div className="hero-buttons">
              <a href="#find-teammates" className="primary-btn">
                Find Your Team →
              </a>
              <a href="#create-post" className="secondary-btn">
                + Create a Post
              </a>
            </div>
            <div className="hero-note">
              <span>✦</span> Made for students who want to build together
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">GET STARTED</p>
            <h2>Build your team in 3 simple steps</h2>
            <p>From finding an opportunity to finding your people.</p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Discover</h3>
              <p>Find hackathons, competitions, and projects that match your interests.</p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Connect</h3>
              <p>Share the skills you need and connect with students who want to collaborate.</p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Build Together</h3>
              <p>Bring your ideas together and start building something meaningful.</p>
            </article>
          </div>
        </section>

        <section id="create-post">
          <CreatePost />
        </section>

        <section id="find-teammates">
          <BrowsePosts />
        </section>

        <footer className="footer">
          <a href="#home" className="logo">
            <span className="logo-mark">T</span>
            TeamUp
          </a>
          <p>Good ideas are better when built together.</p>
          <span>Built for student collaboration.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;