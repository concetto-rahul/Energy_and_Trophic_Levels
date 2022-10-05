import "./congratulations-screen.scss";

const CongratulationsScreen = ({ resetGame }) => {
  return (
    <div className="congratulations-screen-wrapper">
      <div className="congratulations-screen-container">
        <div className="congratulations-screen">
          <div className="grass-left"></div>
          <div className="congratulations-screen-content">
            <div className="icon"></div>
            <p className="heading">Congratulations!</p>
            <p className="content">
              You have answered all the questions on energy and trophic levels.
            </p>
            <button
              type="button"
              className="continue-btn"
              title="Reset"
              aria-label="Reset"
              onClick={resetGame}
            >
              <span className="text" aria-hidden="true">
                Reset
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

export default CongratulationsScreen;
