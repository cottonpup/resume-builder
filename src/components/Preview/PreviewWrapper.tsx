import { useWindowSize } from '../hooks/windowSizeHook';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

export function PreviewWrapper(props: Props) {
  const windowSize = useWindowSize();
  return (
    <div className="w-full flex-1 flex items-center justify-center leading-2 break-words">
      <div className="relative">
        <div
          className="bg-white aspect-[21/29.7] h-[1122.52px] rounded-[12px] absolute overflow-hidden break-all"
          style={{
            transform: `translate(-50%, -50%) scale(calc(${windowSize.height - 130} /
          1122.52))`,
          }}
        >
          {/* 1070px height */}
          <div className="p-12 break-all">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
