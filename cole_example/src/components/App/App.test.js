import React, { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  // expect(screen.getByText(/Hour: 2023-04-04T00:00 temp 7.9/i)).not().toBeInTheDocument();
  // expect(screen.getByText(/Latitude-test-50/i)).toBeInTheDocument();

  fireEvent.change(screen.getByTestId('LongitudeInput'), {
    target: { value: '50' },
  });
  fireEvent.change(screen.getByTestId('LatitudeInput'), {
    target: { value: '50' },
  });

  // await new Promise(res => setTimeout(() => res(), 1000));
  expect(screen.getByText(/Latitude-test-50/i)).toBeInTheDocument();

  // expect(screen.getByTestId("test").value.toEqual(50));
});
