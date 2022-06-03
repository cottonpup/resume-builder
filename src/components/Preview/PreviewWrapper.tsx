import { useWindowSize } from '../hooks/windowSizeHook';
import React, { useState } from 'react';
interface Props {
  children: React.ReactNode;
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PreviewWrapper(props: Props) {
  const windowSize = useWindowSize();
  const [showFullBtn, setShowFullBtn] = useState(false);

  const containerClass = props.isFullScreen
    ? `overflow-y-auto items-start `
    : `items-center`;

  // TODO find a way to determine 1122.52 depending on the dpi of the screen
  const dimensionsClass = props.isFullScreen
    ? 'aspect-[21/29.7] h-[1122.52px] my-9'
    : 'aspect-[21/29.7] h-[1122.52px] absolute';

  const dimensionsStyle = props.isFullScreen
    ? ``
    : // 130 is a 130px constant margin
      `translate(-50%, -50%) scale(calc(${windowSize.height - 130} / 1122.52))`;

  return (
    <div
      className={`w-full flex-1 flex justify-center leading-2 break-words relative ${containerClass}`}
    >
      <div className="relative">
        <div
          className={`bg-white ${dimensionsClass} rounded-[12px] break-all`}
          style={{
            transform: `${dimensionsStyle}`,
          }}
          onMouseEnter={() => setShowFullBtn(true)}
          onMouseLeave={() => setShowFullBtn(false)}
          onClick={() =>
            !props.isFullScreen && props.setIsFullScreen && props.setIsFullScreen(true)
          }
        >
          {!props.isFullScreen && (
            <div
              className={`cursor-pointer absolute inset-0 z-[3] flex items-center justify-center }`}
            >
              <div
                className={`flex items-center justify-center w-[78px] h-[78px] bg-[#1a91f0] rounded-[54px] fill-[#ffffff] ${
                  showFullBtn ? 'scale-100' : 'scale-0'
                } transition-transform`}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 17h4v2H5v-6h2v4zM19 5v6h-2V7h-4V5h6z"></path>
                </svg>
              </div>
            </div>
          )}
          <div className="p-12 break-all">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
