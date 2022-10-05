const ScreenTwo = ({ selectedStep2, completScreen }) => {
  return (
    <div className="game-container1">
      <div className="top-area">
        <div
          role="img"
          className="food-chain"
          aria-label="A food chain diagram. Energy flowing from the Sun, to plants, to a rabbit, to a snake, and finally to an eagle."
        >
          <div
            role="img"
            className={`sun ${selectedStep2.includes(4) ? "active-box" : ""}`}
            aria-label="The Sun"
          ></div>
          <div
            role="img"
            className={`flower ${
              selectedStep2.includes(3) ? "active-box" : ""
            }`}
            aria-label="Wild plant; tall grasses with a yellow flower"
          ></div>
          <div
            role="img"
            className={`rabbit ${
              selectedStep2.includes(2) ? "active-box" : ""
            }`}
            aria-label="Brown rabbit"
          ></div>
          <div
            role="img"
            className={`snake ${selectedStep2.includes(1) ? "active-box" : ""}`}
            aria-label="Snake with red, yellow, and black stripes"
          ></div>
          <div
            role="img"
            className={`eagle ${selectedStep2.includes(0) ? "active-box" : ""}`}
            aria-label="Eagle perched in a tree"
          ></div>
        </div>
      </div>
      <div className="bottom-area">
        <p className="text-info">Flow of Energy in a Food Chain</p>
        <div className="pyramid-container">
          <div className="empty-pyramid">
            <div
              role="img"
              className={`pyramid-sections pyramid-eagle ${
                selectedStep2.includes(0) ? "show-pyramid" : ""
              }`}
              aria-label="The fourth layer of the energy pyramid, which is the top, shows an eagle in the layer."
            ></div>
            <div className="btn-container first-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                title="Tertiary Consumers"
                aria-label="Tertiary Consumers"
                aria-pressed="false"
              >
                Tertiary Consumers
              </button>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-snake ${
                selectedStep2.includes(1) ? "show-pyramid" : ""
              }`}
              aria-label="Third highest layer of the energy pyramid; snakes are included in this layer."
            ></div>
            <div className="btn-container second-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                title="Secondary Consumers"
                aria-label="Secondary Consumers"
                aria-pressed="false"
              >
                Secondary Consumers
              </button>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-rabbit ${
                selectedStep2.includes(2) ? "show-pyramid" : ""
              }`}
              aria-label="Second highest layer of the energy pyramid; rabbits are included in this layer."
            ></div>
            <div className="btn-container third-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                title="Primary Consumers"
                aria-label="Primary Consumers"
                aria-pressed="false"
              >
                Primary Consumers
              </button>
            </div>
            <div
              role="img"
              className={`pyramid-sections pyramid-plant ${
                selectedStep2.includes(3) ? "show-pyramid" : ""
              }`}
              aria-label="Bottom layer of the energy pyramid; plants are included in this layer."
            ></div>
            <div className="btn-container fourth-box">
              <div className="dot"></div>
              <div className="link-line"></div>
              <button
                type="button"
                title="Producers"
                aria-label="Producers"
                aria-pressed="false"
              >
                Producers
              </button>
            </div>
          </div>
        </div>
        <p aria-hidden="true" class="pyramid-text">
          Energy Pyramid
        </p>
        <button
          type="button"
          class="next-btn"
          title="Next"
          aria-label="Next"
          onClick={completScreen}
        >
          <span class="text" aria-hidden="true">
            Next
          </span>
          <img
            src="assets/images/next_arrow_icon.svg"
            className="icon"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default ScreenTwo;
