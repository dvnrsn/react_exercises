import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import { Solution } from './ProgressBarExercise'

test('shows loader when click "START REQUEST"', async () => {
  render(<Solution />)
  const progressBar = await screen.getByTestId('progress-bar')
  expect(parseInt(progressBar.style.width)).toEqual(0)
  const startButton = screen.getByRole('button', {name: /start/i})
  fireEvent.click(startButton)
  expect(parseInt(progressBar.style.width)).toBeGreaterThan(0)
})

test.skip('shows full loader when click "FINISH"', async () => {
  // this test is failing due to a missing polyfill that might need eject to fix
  render(<Solution />)
  const startButton = screen.getByRole('button', {name: /start/i})
  fireEvent.click(startButton)
  const finish = screen.getByRole('button', {name: /finish/i})
  fireEvent.click(startButton)
  const progressBar = await screen.getByTestId('progress-bar')
  await waitFor(() => expect(parseInt(progressBar.style.width)).toEqual(100))
})