import { useCss, maybe } from "kremling";
import React from "react";

export default function Button({children, onClick, type}) {
  return (
    <div {...useCss(css)} className="buttonWrapper">
      <button onClick={onClick} className={maybe('red', type === 'red')}>
        {children}
      </button>
    </div>
  )
}

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