import "./App.css";
import CreatePost from "./CreatePost";
import BrowsePosts from "./BrowsePosts";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">T</span>
          TeamUp
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#create-post">Create Post</a>
          <a href="#find-teammates">Find Teammates</a>
        </div>

        
      </nav>

      <main>
        {/* Homepage */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">BUILD TOGETHER</p>

            <h1>
              Find teammates.
              <br />
              <span>Build something great.</span>
            </h1>

            <p className="hero-text">
              TeamUp helps college students find teammates
              for hackathons, competitions, and events.
            </p>

            <div className="hero-buttons">
              <a href="#find-teammates" className="primary-btn">
                Find Teammates →
              </a>

              <a href="#create-post" className="secondary-btn">
                Create a Post
              </a>
            </div>
          </div>
        </section>

        {/* Create Post */}
        <section id="create-post">
          <CreatePost />
        </section>

        {/* Find Teammates */}
        <section id="find-teammates">
          <BrowsePosts />
        </section>
      </main>
    </div>
  );
}

export default App;


