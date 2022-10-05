const ScreenOne = ({
  activeStep,
  selectedStep,
  selectedStepAction,
  nextAction,
}) => {
  return (
    <div className="game-container">
      <div className="left">
        <div
          role="img"
          className="food-chain"
          aria-label="A food chain diagram. Energy flowing from the Sun, to plants, to a rabbit, to a snake, and finally to an eagle."
        >
          <div
            role="img"
            className={`sun ${activeStep === 4 ? "active-box" : ""}`}
            aria-label="The Sun"
          ></div>
          <div
            aria-hidden="true"
            className={`arrow first-arrow ${activeStep === 4 ? "show" : ""}`}
          ></div>
          <div
            role="img"
            className={`flower ${
              activeStep === 4 || activeStep === 3 ? "active-box" : ""
            }`}
            aria-label="Wild plant; tall grasses with a yellow flower"
          ></div>
          <div
            aria-hidden="true"
            className={`arrow second-arrow ${activeStep === 3 ? "show" : ""}`}
          ></div>
          <div
            role="img"
            className={`rabbit ${
              activeStep === 3 || activeStep === 2 ? "active-box" : ""
            }`}
            aria-label="Brown rabbit"
          ></div>
          <div
            aria-hidden="true"
            className={`arrow third-arrow ${activeStep === 2 ? "show" : ""}`}
          ></div>
          <div
            role="img"
            className={`snake ${
              activeStep === 1 || activeStep === 2 ? "active-box" : ""
            }`}
            aria-label="Snake with red, yellow, and black stripes"
          ></div>
          <div
            aria-hidden="true"
            className={`arrow fourth-arrow ${activeStep === 1 ? "show" : ""}`}
          ></div>
          <div
            role="img"
            className={`eagle ${activeStep === 1 ? "active-box" : ""}`}
            aria-label="Eagle perched in a tree"
          ></div>
        </div>
        <p className="text-info">Flow of Energy in a Food Chain</p>
        <div className="pyramid-container">
          <div className="empty-pyramid">
            <div
              role="img"
              className={`pyramid-sections pyramid-eagle ${
                activeStep === 1 ? "show-pyramid" : ""
              }`}
              aria-label="The fourth layer of the energy pyramid, which is the top, shows an eagle in the layer."
            ></div>
            <div className="btn-container first-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                className={`${activeStep === 1 ? "active" : ""}`}
                title="Tertiary Consumers"
                aria-label="Tertiary Consumers"
                aria-pressed="false"
                onClick={() => selectedStepAction(1)}
              >
                Tertiary Consumers
              </button>
              <div
                className={`tick-icon ${
                  selectedStep.includes(1) && activeStep !== 1 ? "show" : ""
                }`}
              ></div>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-snake ${
                activeStep === 2 ? "show-pyramid" : ""
              }`}
              aria-label="Third highest layer of the energy pyramid; snakes are included in this layer."
            ></div>
            <div className="btn-container second-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                className={`${activeStep === 2 ? "active" : ""}`}
                title="Secondary Consumers"
                aria-label="Secondary Consumers"
                aria-pressed="false"
                onClick={() => selectedStepAction(2)}
              >
                Secondary Consumers
              </button>
              <div
                className={`tick-icon ${
                  selectedStep.includes(2) && activeStep !== 2 ? "show" : ""
                }`}
              ></div>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-rabbit ${
                activeStep === 3 ? "show-pyramid" : ""
              }`}
              aria-label="Second highest layer of the energy pyramid; rabbits are included in this layer."
            ></div>
            <div className="btn-container third-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                className={`${activeStep === 3 ? "active" : ""}`}
                title="Primary Consumers"
                aria-label="Primary Consumers"
                aria-pressed="false"
                onClick={() => selectedStepAction(3)}
              >
                Primary Consumers
              </button>
              <div
                className={`tick-icon ${
                  selectedStep.includes(3) && activeStep !== 3 ? "show" : ""
                }`}
              ></div>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-plant ${
                activeStep === 4 ? "show-pyramid" : ""
              }`}
              aria-label="Bottom layer of the energy pyramid; plants are included in this layer."
            ></div>
            <div className="btn-container fourth-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                className={`${activeStep === 4 ? "active" : ""}`}
                title="Producers"
                aria-label="Producers"
                aria-pressed="false"
                onClick={() => selectedStepAction(4)}
              >
                Producers
              </button>
              <div
                className={`tick-icon ${
                  selectedStep.includes(4) && activeStep !== 4 ? "show" : ""
                }`}
              ></div>
            </div>
          </div>
          <p aria-hidden="true" class="pyramid-text">
            Energy Pyramid
          </p>
        </div>
      </div>
      <div className="right">
        {selectedStep.length >= 4 && (
          <button type="button" className="next-btn" onClick={nextAction}>
            <span className="text">Next</span>
            <img
              src="assets/images/next_arrow_icon.svg"
              className="start-btn-icon"
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScreenOne;
