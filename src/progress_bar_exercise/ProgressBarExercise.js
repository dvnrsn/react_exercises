import { useCss } from "kremling";
import React from "react";
import Exercise from "../exercise/Exercise";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return (
    <div {...useCss(css)}>
      <div className='progressBar' />
      Add solution here
    </div>
  )
};

const css = `
  & .progressBar {
    position: fixed;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background: linear-gradient(to right, var(--sunset), var(--red));
  }
`