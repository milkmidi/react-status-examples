// @flow
import React, { useRef } from 'react';
import gsap from 'gsap';
import { css } from '@emotion/css';

const style = css`;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;
const countStyle = css`
  left: 0;
  top: 0;
  padding: 2px;
  border: 3px solid #e67e22;
  background-color:#f1c40f;
  height: 100%;
  color:white;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  border-radius:4px;
  padding: 2px 6px;
  font-size: 20px;
`;
export default function RenderTip() {
  const refCount = useRef<number>(0);
  const refMemoTipEl = useRef<HTMLElement>(null);
  React.useEffect(() => {
    refCount.current += 1;
    gsap.fromTo(
      refMemoTipEl.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.35,
        ease: 'back.out(1.7)',
      },
    );
  });
  return (
    <div className={style}>
      <span className={countStyle} ref={refMemoTipEl}>
        {refCount.current}
      </span>
    </div>
  );
}
