import { render, screen } from '@testing-library/react';
import App from './App';
// import MainPage from './Components/MainPage';
import BookingForm from './Components/BookingForm';

// test('renders a link that that point to Little Lemon webpage', () => {
//   render(<MainPage />);
//   const linkElement = screen.getByText("Little Lemon Restuaurant");
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make your Reservation");
  expect(headingElement).toBeInTheDocument();
})
