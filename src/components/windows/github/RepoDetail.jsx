import "./RepoDetail.scss";

const RepoDetail = ({ repo, goBack }) => {
  return (
    <div className="repo-detail">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>

      <div className="repo-main">
        <img src={repo.image} alt={repo.title} />
        <h2>{repo.title}</h2>
        <p>{repo.fullDescription}</p>

        <div className="tags">
          {repo.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <div className="links">
          <a href={repo.repoLink} target="_blank">
            Repo
          </a>
          {repo.demoLink && (
            <a href={repo.demoLink} target="_blank">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
