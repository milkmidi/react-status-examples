import React from 'react';
import PrismCode from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';

const code = require('!!raw-loader!./store').default;

export default function SytanxCode() {
  return (
    <PrismCode component="pre" className="language-jsx">
      {
        code
      }
    </PrismCode>
  );
}
