import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { CountExampleComponent, TodoExampleComponent } from './InnerComponent';

export default function () {
  return (
    <RecoilRoot>
      <section data-name="Recoil">
        <CountExampleComponent />
        <TodoExampleComponent />
      </section>
    </RecoilRoot>
  );
}
