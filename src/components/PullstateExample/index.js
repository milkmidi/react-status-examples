import React from 'react';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

export default function () {
  return (
    <section data-name="Pullstate">
      <CountExampleComponent />
      <TodoExampleComponent />
    </section>
  );
}
