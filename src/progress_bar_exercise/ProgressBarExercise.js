import { useCss } from "kremling";
import React, { useState } from "react";
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
      <button>
        Start Request
      </button>
      <button className='red'>
        Finish Request
      </button>
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
  & button {
    border: var(--green) 1px solid;
    color: var(--green);
    padding: .6rem 1.2rem;
    border-radius: 2rem;
  }
  & button:hover {
    border-width: 2px;
    margin: -1px;
  }
  & button:active {
    border-width: 3px;
    margin: -2px;
  }
  & .red {
    color: var(--red);
    border-color: var(--red);
  }
`