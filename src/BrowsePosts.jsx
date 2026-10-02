import { useState, useEffect } from "react";

function BrowsePosts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const oldPost = localStorage.getItem("teamupPost");

    const savedPosts = JSON.parse(
      localStorage.getItem("teamupPosts") || "[]"
    );

    if (oldPost && savedPosts.length === 0) {
      savedPosts.push(JSON.parse(oldPost));
    }

    const postsWithIds = savedPosts.map((post) => ({
      ...post,
      id: post.id || Date.now() + Math.random(),
    }));
    localStorage.setItem(
      "teamupPosts",
      JSON.stringify(postsWithIds)
    );
    setPosts(postsWithIds);
  }, []);
  const filteredPosts = posts.filter((post) =>
    post.eventName.toLowerCase().includes(search.toLowerCase()) ||
    post.skills.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (post) => {
    localStorage.setItem("editingPost", JSON.stringify(post));
    window.location.hash = "create-post";
    window.location.reload();
  };
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) {
      return;
    }

    const updatedPosts = posts.filter((post) => post.id !== id);

    localStorage.setItem(
      "teamupPosts",
      JSON.stringify(updatedPosts)
    );

    setPosts(updatedPosts);
  };
  return (
    <div className="browse-posts">
      <h1>Find Teammates</h1>

      <p>Discover teams looking for members.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search hackathons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            type="button"
            className="clear-search"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <div className="post-card" key={post.id}>
            <h2>{post.eventName}</h2>
            <p className="post-author">
              Posted by: <strong>{post.username}</strong>
            </p>

            <p>
              <strong>Members needed:</strong> {post.membersNeeded}
            </p>

            <p>
              <strong>Looking for:</strong>
            </p>

            <div className="skill-tags">
              {post.skills.split(",").map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.trim()}
                </span>
              ))}
            </div>

            <p>
              <strong>About the team:</strong> {post.description}
            </p>

            <p>
              <strong>Contact:</strong> {post.contact}
            </p>

            <a
              className="event-link"
              href={post.eventLink}
              target="_blank"
              rel="noreferrer"
            >
              View Official Event →
            </a>
            <button
              className="edit-button"
              onClick={() => handleEdit(post)}
            >
              Edit Post
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </div>
        ))
      ) : (
        <p className="empty-message">
          {search
            ? `No posts found for "${search}". Try another search.`
            : "No team posts yet. Create the first one!"}
        </p>
      )}
    </div>
  );
}

export default BrowsePosts;