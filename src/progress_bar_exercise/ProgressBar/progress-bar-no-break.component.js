import { useCss } from "kremling";
import React, { useEffect, useRef, useState } from "react";

export default function ProgressBarNoBreak({ loading }) {
  const [opacity, setOpacity] = useState(1)
  const [width, setWidth] = useState('0%')
  const [transition, setTransition] = useState('15s ease, opacity 1s ease-in-out')
  const [started, setStarted] = useState()

  useEffect(() => {
    if (loading) {
      setTransition('15s ease, opacity 1s ease-in-out')
      setOpacity(1)
      setWidth('90%')
      setStarted(true)
    } else if (started) {
      setTransition('1s, opacity 1s ease-in-out')
      setWidth('100%')
      const timer = setTimeout(() => {
        setOpacity(0);
        setStarted(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [loading, started])

  useEffect(() => {
    if (opacity) return
    const timer = setTimeout(() => {
      setTransition('1s, opacity 1s ease-in-out'); setWidth(0);
    }, 1000)
    return () => clearTimeout(timer)
  }, [opacity])

  return (
    <div data-testid="progress-bar" {...useCss(css)} className='progressBar' style={{ width, opacity, transition }} />
  )
}

const css = `
  & .progressBar {
    position: fixed;
    top: 0;
    left: 0;
    height: 6px;
    background: linear-gradient(to right, var(--sunset), var(--red));
  }
`