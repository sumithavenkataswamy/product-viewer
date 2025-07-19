import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Routing', () => {
  test('renders Header always', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });

  test('renders Home component on default route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Adjust based on actual text in your Home component
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test('renders About component on "/about" route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    // Adjust based on actual text in your About component
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test('renders Contact component on "/contact" route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    // Adjust based on actual text in your Contact component
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('renders ProductAdd component on "/product-add" route', () => {
    render(
      <MemoryRouter initialEntries={['/product-add']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/product add/i)).toBeInTheDocument();
  });

  test('renders ProductList component on "/product-list" route', () => {
    render(
      <MemoryRouter initialEntries={['/product-list']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/product list/i)).toBeInTheDocument();
  });

  test('renders ProductListStore component on "/product-list-store" route', () => {
    render(
      <MemoryRouter initialEntries={['/product-list-store']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/product list store/i)).toBeInTheDocument();
  });

  test('renders ProductView component on "/product/:id" route', () => {
    render(
      <MemoryRouter initialEntries={['/product/123']}>
        <App />
      </MemoryRouter>
    );

    // Adjust based on ProductView's expected text
    expect(screen.getByText(/product view/i)).toBeInTheDocument();
  });

  test('renders ProductViewUsingContext component on "/product-view-context" route', () => {
    render(
      <MemoryRouter initialEntries={['/product-view-context']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/product view using context/i)).toBeInTheDocument();
  });

  test('renders ProductViewProps component on "/product-view-props" route', () => {
    render(
      <MemoryRouter initialEntries={['/product-view-props']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/product view props/i)).toBeInTheDocument();
  });
});
