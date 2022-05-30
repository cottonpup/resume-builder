import { useWindowSize } from '../hooks/windowSizeHook';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

export function PreviewView(props: Props) {
  const windowSize = useWindowSize();
  return (
    <div className="w-full flex-1 flex items-center justify-center leading-2 break-words">
      <div className="relative">
        <div
          className="bg-white aspect-[21/29.7] h-[1122.52px] min-w-[21cm] min-h-[29.7cm] rounded-md absolute overflow-hidden break-all"
          style={{
            transform: `translate(-50%, -50%) scale(calc(${windowSize.height - 130} /
          1122.52))`,
          }}
        >
          <div className="p-12 h-[1122.52px] min-h-[29.7cm] break-all">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
