import { useCss } from "kremling";
import React, { useEffect, useState } from "react";

export default function ProgressBar({ loading }) {
  const [seconds, setSeconds] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (seconds && !loading) { // loading was toggled to false and we have a count going
      setSeconds(16)
      const timer = setTimeout(() => setOpacity(0), 3000)
      return () => clearTimeout(timer)
    } else if (loading) { // loading is true
      if (seconds > 15 || seconds == 0) setSeconds(1)
      setOpacity(1)
      const timer = setInterval(() => {
        if (seconds < 15) setSeconds(seconds + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [loading, seconds])

  const width = seconds <= 15
    ? `${.90 * (seconds / 15 * 100)}%`
    : "100%"

  return (
    <div {...useCss(css)} className='progressBar' style={{ width, opacity }} />
  )
}

const css = `
  & .progressBar {
    position: fixed;
    top: 0;
    left: 0;
    height: 6px;
    background: linear-gradient(to right, var(--sunset), var(--red));
    transition: 1s ease, opacity 1s ease-in-out;
  }
`