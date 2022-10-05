const AlertMessage = ({ show, closeAction, text, image, imageText }) => {
  return (
    <div className={`alert-message ${!show ? "hide" : ""}`}>
      <div className="alert-message-container">
        <div>
          <img
            src="assets/images/attention_icon.svg"
            className="alert-icon"
            alt=""
          />
        </div>
        <div>
          <h1 className="alert-title">{text}</h1>
          {image && (
            <div
              role="img"
              className="alert-image"
              aria-label={imageText || ""}
            ></div>
          )}
          <button type="button" className="start-btn" onClick={closeAction}>
            <span className="text">Start</span>
            <img
              src="assets/images/next_arrow_icon.svg"
              className="start-btn-icon"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
