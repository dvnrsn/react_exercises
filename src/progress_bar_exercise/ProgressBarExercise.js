import { useCss } from "kremling";
import React, { useState } from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from './ProgressBar/progress-bar.component'

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
  const [loading, setLoading] = useState()
  return (
    <div {...useCss(css)}>
      <ProgressBar loading={loading} />
      <div className='buttonWrapper'>
        <button onClick={() => setLoading(true)}>
          {loading ? "LOADING..." : "START REQUEST"}
        </button>
      </div>
      <div className='buttonWrapper'>
        <button onClick={() => setLoading(false)} className='red'>
          FINISH REQUEST
        </button>
      </div>
    </div>
  )
};

const css = `
  & button {
    font-weight: 500;
    border: var(--green) 1px solid;
    color: var(--green);
    padding: .8rem 1.2rem;
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
  & .buttonWrapper {
    margin-right: .8rem;
    display: inline-block;
    width: 10rem;
  }
`