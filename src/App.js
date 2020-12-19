import React from 'react';
import './utils/prism-line-numbers';

import ReduxExample from './components/ReduxExample';
import PullstateExample from './components/PullstateExample';
import RecoilExample from './components/RecoilExample';
import MobxExample from './components/MobxExample';
import ZustandExample from './components/ZustandExample';
import ValtioExample from './components/ValtioExample';
import './styles.css';
// import './prism.css';

export default function App() {
  return (
    <div className="container">
      <ReduxExample />
      <PullstateExample />
      <RecoilExample />
      <MobxExample />
      <ZustandExample />
      <ValtioExample />
    </div>
  );
}
