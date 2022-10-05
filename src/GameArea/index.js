import { useCallback, useEffect, useMemo, useState } from "react";
import AlertMessage from "../component/AlertMessage";
import ClickSong from "../utility/audios/secondary_click.mp3";
import NextStepSong from "../utility/audios/incorrect_drag_revert.mp3";
import CompletionStepSong from "../utility/audios/completion_reward_screen.mp3";

import "./game_area.scss";
import CompletionScreen from "../CompletionScreen";
import ScreenTwo from "./screenTwo";
import ScreenOne from "./screenOne";
import Quiz from "../Quiz";
import CongratulationsScreen from "../CongratulationsScreen";
import ToastAlert from "../component/ToastAlert";

const GameArea = () => {
  const clickSong = useMemo(() => {
    return new Audio(ClickSong);
  }, []);
  const nextStepSong = useMemo(() => {
    return new Audio(NextStepSong);
  }, []);
  const completionStepSong = useMemo(() => {
    return new Audio(CompletionStepSong);
  }, []);
  const [showAlert, setShowAlert] = useState(true);
  const [selectedStep, setSelectedStep] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isAllStepCheck, setIsAllStepCheck] = useState(false);
  const [screen2Step, setScreen2Step] = useState(5);
  const [selectedStep2, setSelectedStep2] = useState([]);
  const [completionScreen, setCompletionScreen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionRightWrong, setQuestionRightWrong] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  const closeAction = useCallback(() => {
    clickSong.play();
    setShowAlert(false);
  }, [clickSong]);

  const selectedStepAction = useCallback(
    (id) => {
      !selectedStep.includes(id) && setSelectedStep((val) => [...val, id]);
      setActiveStep(id);
      clickSong.play();
    },
    [selectedStep, clickSong]
  );

  const nextAction = useCallback(() => {
    clickSong.play();
    setActiveStep(0);
    setIsAllStepCheck(true);
    setSelectedStep([]);
    setTimeout(() => {
      nextStepSong.play();
    }, 400);
  }, [clickSong, nextStepSong]);

  useEffect(() => {
    if (isAllStepCheck && screen2Step >= 0) {
      const interval = setInterval(() => {
        setScreen2Step((val) => val - 1);
      }, 850);
      setSelectedStep2((val) => [...val, screen2Step]);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isAllStepCheck, screen2Step]);

  const completScreen = useCallback(() => {
    setCompletionScreen(true);
    clickSong.play();
    setTimeout(() => {
      completionStepSong.play();
    }, 600);
  }, [clickSong, completionStepSong]);

  const continueToQuiz = () => {
    setShowQuiz(true);
    setCompletionScreen(false);
    setIsAllStepCheck(false);
    setSelectedStep2([]);
    setScreen2Step(5);
    clickSong.play();
  };

  const closeToastAlert = useCallback(() => {
    setQuestionRightWrong("");
  }, []);

  const isAnswerRightWorng = useCallback(
    (type) => {
      setQuestionRightWrong(type);
      setTimeout(() => {
        closeToastAlert();
      }, 2000);
    },
    [closeToastAlert]
  );

  const auizCompleteAction = useCallback(() => {
    completionStepSong.play();
    setQuizComplete(true);
  }, [completionStepSong]);

  const resetGame = useCallback(() => {
    clickSong.play();
    setQuizComplete(false);
    setShowQuiz(false);
    setIsAllStepCheck(false);
    setTimeout(() => {
      setShowAlert(true);
    }, 500);
  }, [clickSong]);

  return (
    <>
      <div className="scalable-wrapper">
        <div className="scalable-wrapper-container">
          <div className="game-area">
            <div className="alert-box">
              <AlertMessage
                show={showAlert}
                closeAction={closeAction}
                text="Welcome to the beautiful Pineywoods! Today, you will explore how energy flows through different organisms in this ecosystem."
                image="assets/images/next_arrow_icon.svg"
                imageText="A forest ecosystem with grasses, wildflowers, bushes, and trees; rabbits and snakes are on the ground. An eagle is in a tree."
              />
              {questionRightWrong !== "" && (
                <ToastAlert
                  type={questionRightWrong}
                  text={
                    (questionRightWrong === "warning" &&
                      "Not quite right. Try again!") ||
                    (questionRightWrong === "positive" && "That's right!")
                  }
                  closeAction={closeToastAlert}
                />
              )}
              {completionScreen && (
                <CompletionScreen continueToQuiz={continueToQuiz} />
              )}
              {quizComplete && <CongratulationsScreen resetGame={resetGame} />}
            </div>
            {!showQuiz ? (
              <>
                {!isAllStepCheck ? (
                  <ScreenOne
                    activeStep={activeStep}
                    selectedStep={selectedStep}
                    selectedStepAction={selectedStepAction}
                    nextAction={nextAction}
                  />
                ) : (
                  <ScreenTwo
                    selectedStep2={selectedStep2}
                    completScreen={completScreen}
                  />
                )}
              </>
            ) : (
              <Quiz
                isAnswerRightWorng={isAnswerRightWorng}
                clickSong={clickSong}
                auizCompleteAction={auizCompleteAction}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameArea;
