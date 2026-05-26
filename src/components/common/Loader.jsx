const Loader = ({ fullScreen = false, text = "Loading..." }) => {
  return (
    <div className={`loader ${fullScreen ? "fullscreen" : ""}`}>
      <div className="loader-box">
        <div className="spinner"></div>
        <h5 className="loader-text">{text}</h5>
      </div>
    </div>
  );
};

export default Loader;