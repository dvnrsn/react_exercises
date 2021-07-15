import { useCss } from "kremling";
import React, { useEffect, useState } from "react";

export default function ProgressBar({ loading }) {
  const [seconds, setSeconds] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [visible, setVisible] = useState()

  useEffect(() => {
    if (seconds && !loading) { // loading was toggled to false and we have a count going, i.e., request finished
      setSeconds(16)
      const timer = setTimeout(() => setOpacity(0), 3000)
      return () => clearTimeout(timer)
    } else if (loading) { // loading is true
      if (seconds > 15 || seconds === 0) setSeconds(1)
      setOpacity(1)
      const interval = setInterval(() => {
        if (seconds < 15) setSeconds(seconds + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [loading, seconds, opacity])

  useEffect(() => {
    // the purpose of something like the "visible" state variable might be to unmount the progress bar completely
    // and immediately remount, helping avoid animating from 100% to 10%
    if (!opacity) {
      const timer = setTimeout(() => setVisible(false), 1000)
      return clearTimeout(timer)
    }
  }, [opacity])

  const width = seconds <= 15
    ? `${.90 * (seconds / 15 * 100)}%`
    : "100%"

  return (
    <div data-testid="progress-bar" {...useCss(css)} className='progressBar' style={{ width, opacity }} />
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