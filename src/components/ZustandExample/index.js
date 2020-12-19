import React from 'react';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';
import SyntanxCode from './SytanxCode';

export default function ReduxExample() {
  return (
    <section data-name="Zustand">
      <SyntanxCode />
      <CountExampleComponent />
      <TodoExampleComponent />
    </section>
  );
}
