import React, { useState } from "react";
import axios from "axios";
import 'animate.css/animate.min.css';
import "./App.css";
import RepoCard from "./components/RepoCard";

function App() {
  const [repos, setRepos] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const searchRepos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${keyword}`
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <header className="animate__animated animate__fadeInDown">
        <h1 className="fancy-title">GitHub Repo Search</h1>
        <p>Find repositories based on any keyword!</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-input"
        />
        <button onClick={searchRepos} className="search-button">
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="repo-list animate__animated animate__fadeInUp">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


