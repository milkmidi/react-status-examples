import React from 'react';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

export default function () {
  return (
    <section data-name="Valtio">
      <CountExampleComponent />
      <TodoExampleComponent />
    </section>
  );
}
