import React from 'react';
import { Provider } from 'mobx-react';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

import store from './store';

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <section data-name="Mobx">
        <CountExampleComponent />
        <TodoExampleComponent />
      </section>
    </Provider>
  );
}
