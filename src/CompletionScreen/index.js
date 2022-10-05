import "./completion-screen.scss";

const CompletionScreen = ({ continueToQuiz }) => {
  return (
    <div className="completion-screen-wrapper">
      <div className="completion-screen-container">
        <div className="completion-screen">
          <div className="grass-left"></div>
          <div className="completion-screen-content">
            <div className="icon"></div>
            <p className="heading">Great job!</p>
            <p className="content">
              You have successfully explored how energy flows through the
              different trophic levels in an ecosystem. Now it is time to show
              what you know.
            </p>
            <button
              type="button"
              className="continue-btn"
              title="Continue"
              aria-label="Continue"
              onClick={continueToQuiz}
            >
              <span className="text" aria-hidden="true">
                Continue
              </span>
              <span className="arrow-icon" aria-hidden="true"></span>
            </button>
          </div>
          <div class="leaves-left"></div>
          <div class="grass-leaves-right"></div>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;
