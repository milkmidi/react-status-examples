import React from 'react';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

export default function ReduxExample() {
  return (
    <section data-name="Zustand">
      <CountExampleComponent />
      <TodoExampleComponent />
    </section>
  );
}
