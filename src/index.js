import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const App = () => {
  const steps = {
    1: "Learn React 💪",
    2: "Apply for Jobs 👔",
    3: "Invest your new Income 🤑",
  };
  const stepNumbers = [1, 2, 3];
  const [currentStep, setCurrentStep] = useState(3);
  const [closeState, setCloseState] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 1 && currentStep <= 3) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleClose = () => {
    setCloseState(!closeState);
  };
  return (
    <div className="wrapper">
      <button className="close-btn" onClick={handleClose}>
        &times;
      </button>
      {!closeState && (
        <>
          <div className="container">
            <div className="steps">
              {/* <Circle step={1} stateStep={step} />
          <Circle step={2} stateStep={step} />
          <Circle step={3} stateStep={step} /> */}
              {stepNumbers.map((step) => (
                <Circle step={step} currentStep={currentStep} />
              ))}
            </div>
            <Heading step={currentStep} text={steps[currentStep]} />
            <div className="buttons">
              <Button
                button="button"
                bg="button-bg"
                handleClick={handlePrevious}
                name="Previous"
              />
              <Button
                button="button"
                bg="button-bg"
                handleClick={handleNext}
                name="Next"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

//declaration of circle component
const Circle = ({ step, currentStep }) => {
  return (
    <div className="">
      <p className={`circle ${step <= currentStep ? "bgColor" : ""}`}>{step}</p>
    </div>
  );
};

//declaration of heading component
const Heading = ({ step, text }) => {
  return (
    <div className="heading">
      <h3>
        Step {step}: {text}
      </h3>
    </div>
  );
};

//declaration of button component
const Button = ({ name, handleClick, bg, button }) => {
  return (
    <div className="">
      <button onClick={handleClick} className={`${bg} ${button}`} type="button">
        {name}
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
