import React, { useState } from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from './ProgressBar/progress-bar.component'
import Button from './Button/button-component'
import ProgressBarNoBreak from "./ProgressBar/progress-bar-no-break.component";

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

export const Solution = () => {
  const [loading, setLoading] = useState()
  return (
    <>
      {/* <ProgressBar loading={loading} /> */}
      <ProgressBarNoBreak loading={loading} />
      <Button onClick={() => setLoading(true)}>
        {loading ? "LOADING..." : "START REQUEST"}
      </Button>
      <Button onClick={() => setLoading(false)} type='red'>
        FINISH REQUEST
      </Button>
    </>
  )
};

