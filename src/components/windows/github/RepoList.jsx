import "./RepoList.scss";

const RepoList = ({ data, onClick }) => {
  return (
    <div className="repo-list">
      {data.map((repo) => (
        <div key={repo.id} className="repo-item" onClick={() => onClick(repo)}>
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
          <span className="public-badge">Public</span>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
