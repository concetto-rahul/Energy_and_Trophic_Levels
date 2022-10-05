import { useCallback, useState, useMemo } from "react";
import WrongAnswerSong from "../utility/audios/negative_feedback.mp3";
import RightAnswerSong from "../utility/audios/positive_feedback.mp3";
import OptionClickSong from "../utility/audios/primary_click.mp3";

import "./quiz.scss";

const questions = [
  {
    question:
      "This trophic level has the least amount of energy in the energy pyramid.",
    ans: "primary-consumers",
    attempted: false,
  },
  {
    question:
      "This trophic level has the most amount of energy in the energy pyramid.",
    ans: "producers",
    attempted: false,
  },
  {
    question:
      "This trophic level is made up of herbivores. Herbivores are animals that only eat plants.",
    ans: "secondary-consumers",
    attempted: false,
  },
  {
    question:
      "This trophic level has the most amount of energy in the energy pyramid.",
    ans: "tertiary-consumers",
    attempted: false,
  },
];

const questionOption = [
  { lable: "Producers", value: "producers" },
  { lable: "Primary Consumers", value: "primary-consumers" },
  { lable: "Secondary Consumers", value: "secondary-consumers" },
  { lable: "Tertiary Consumers", value: "tertiary-consumers" },
];

const Quiz = ({ isAnswerRightWorng, clickSong, auizCompleteAction }) => {
  const wrongAnswerSong = useMemo(() => {
    return new Audio(WrongAnswerSong);
  }, []);
  const rightAnswerSong = useMemo(() => {
    return new Audio(RightAnswerSong);
  }, []);
  const optionClickSong = useMemo(() => {
    return new Audio(OptionClickSong);
  }, []);
  const [currentQt, setCurrentQt] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [optionSelected, setoptionSelected] = useState("");
  const questionHeding = `Question ${currentQt + 1} of ${questions.length}.`;

  const nextQuestion = useCallback(() => {
    clickSong.play();
    if (currentQt < questions.length - 1) {
      setCurrentQt((val) => val + 1);
      setShowNextBtn(false);
      setoptionSelected("");
    } else {
      auizCompleteAction();
    }
  }, [currentQt, clickSong, auizCompleteAction]);

  const selectOption = useCallback(
    (val) => {
      optionClickSong.play();
      setoptionSelected(val);
    },
    [optionClickSong]
  );

  const submitAnswer = useCallback(() => {
    const currentQtData = questions[currentQt];
    if (optionSelected === currentQtData.ans) {
      setShowNextBtn(true);
      rightAnswerSong.play();
      isAnswerRightWorng("positive");
    } else {
      wrongAnswerSong.play();
      isAnswerRightWorng("warning");
    }
  }, [
    optionSelected,
    currentQt,
    rightAnswerSong,
    wrongAnswerSong,
    isAnswerRightWorng,
  ]);

  return (
    <div className="quiz-container">
      <div className="left">
        <div className="left-content">
          <div>
            <div
              role="img"
              class="level-img"
              aria-label="Complete energy pyramid; plants in the bottom layer, rabbits in the second layer, snakes in the third layer, and an eagle in the top (fourth) layer."
            >
              <div
                aria-hidden="true"
                className="option-one"
                style={{
                  opacity:
                    showNextBtn && optionSelected === "producers" ? 1 : 0,
                }}
              ></div>
              <div
                aria-hidden="true"
                className="option-two"
                style={{
                  opacity:
                    showNextBtn && optionSelected === "primary-consumers"
                      ? 1
                      : 0,
                }}
              ></div>
              <div
                aria-hidden="true"
                className="option-three"
                style={{
                  opacity:
                    showNextBtn && optionSelected === "secondary-consumers"
                      ? 1
                      : 0,
                }}
              ></div>
              <div
                aria-hidden="true"
                className="option-four"
                style={{
                  opacity:
                    showNextBtn && optionSelected === "tertiary-consumers"
                      ? 1
                      : 0,
                }}
              ></div>
            </div>
            <p aria-hidden="true" class="info-text">
              Energy Pyramid
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="question-area">
          <div className="question-container">
            <div
              role="heading"
              class="heading"
              aria-level="1"
              aria-label={questionHeding}
            >
              {questionHeding}
            </div>
            <p class="question-title" id="question-title">
              {questions[currentQt].question}
            </p>
            <div className="option">
              <ul role="radiogroup" className="radiobuttons">
                {questionOption.map((val) => (
                  <li key={val.value} role="none">
                    <input
                      type="radio"
                      name="option"
                      id={"option-" + val.value}
                      value={val.value}
                      checked={val.value === optionSelected}
                      onChange={() => selectOption(val.value)}
                      {...(!showNextBtn ? "disabled" : "")}
                      disabled={showNextBtn}
                    />
                    <label for={"option-" + val.value}>{val.lable}</label>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className={`submit-btn ${
                optionSelected === "" || showNextBtn ? "disabled" : ""
              }`}
              title="Submit Answer"
              aria-label="Submit Answer"
              {...(optionSelected === "" || showNextBtn ? "disabled" : "")}
              onClick={submitAnswer}
            >
              Submit Answer
            </button>
          </div>
        </div>
        {showNextBtn && (
          <button
            type="button"
            class="next-btn"
            title="Next"
            aria-label="Next"
            onClick={nextQuestion}
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
        )}
      </div>
    </div>
  );
};

export default Quiz;
