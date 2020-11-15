import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

const store = createStore(reducer);

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <section data-name="Redux">
        <CountExampleComponent />
        <TodoExampleComponent />
      </section>
    </Provider>
  );
}
