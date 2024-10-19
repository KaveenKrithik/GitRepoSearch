import React from "react";
import "./RepoCard.css";

function RepoCard({ repo }) {
  return (
    <div className="repo-card animate__animated animate__zoomIn">
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-description">{repo.description}</p>
      <p className="repo-stars">⭐ {repo.stargazers_count} stars</p>
      <a href={repo.html_url} className="repo-link" target="_blank" rel="noopener noreferrer">
        Visit Repo
      </a>
    </div>
  );
}

export default RepoCard;
