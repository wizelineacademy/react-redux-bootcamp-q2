import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { reducer } from '../redux/store';

const testStore = (state: any) => {
  return configureStore({
    reducer,
    preloadedState: state
  });
};

export const renderWithStore = (
  component: React.ReactElement,
  initialState: any
) => {
  const Wrapper = ({ children }: React.PropsWithChildren) => (
    <Provider store={testStore(initialState)}>{children}</Provider>
  );
  return render(component, { wrapper: Wrapper });
};
