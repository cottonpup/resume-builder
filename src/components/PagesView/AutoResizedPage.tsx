import { useWindowSize } from "../hooks/windowSizeHook";
import React, { useState } from "react";
import {
  MARGIN_BOTTOM_INCH,
  MARGIN_LEFT_INCH,
  MARGIN_RIGHT_INCH,
  MARGIN_TOP_INCH,
  PAGE_HEIGHT_INCH,
  PAGE_WIDTH_INCH,
  PAGE_HEIGHT_PX,
} from "./constants";

interface Props {
  isFullPreview: boolean;
  setIsFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  id: string;
}

export function AutoResizedPage(props: Props) {
  const windowSize = useWindowSize();
  const [showFullBtn, setShowFullBtn] = useState(false);

  const containerClass = props.isFullPreview
    ? "overflow-y-auto items-start "
    : "items-center";

  // TODO find a way to determine 1122.52 depending on the dpi of the screen
  const dimensionsClass = props.isFullPreview ? "my-9" : "absolute";

  const dimensionsStyle = props.isFullPreview
    ? ""
    : // 130 is a 130px constant margin
      `translate(-50%, -50%) scale(calc(${
        windowSize.height - 130
      } / ${PAGE_HEIGHT_PX}))`;

  return (
    <div
      className={`w-full flex-1 flex justify-center leading-2 break-words relative ${containerClass}`}
    >
      <div className="relative">
        <div
          id={props.id}
          className={`bg-white ${dimensionsClass} rounded-[12px] break-all`}
          style={{
            transform: `${dimensionsStyle}`,
            height: `${PAGE_HEIGHT_PX}px`,
            aspectRatio: (PAGE_WIDTH_INCH / PAGE_HEIGHT_INCH).toString(),
          }}
          onMouseEnter={() => setShowFullBtn(true)}
          onMouseLeave={() => setShowFullBtn(false)}
          onClick={() =>
            !props.isFullPreview &&
            props.setIsFullPreview &&
            props.setIsFullPreview(true)
          }
        >
          {!props.isFullPreview && (
            <div
              className={`cursor-pointer absolute inset-0 z-[3] flex items-center justify-center }`}
            >
              <div
                className={`flex items-center justify-center w-[78px] h-[78px] bg-[#1a91f0] rounded-[54px] fill-[#ffffff] ${
                  showFullBtn ? "scale-100" : "scale-0"
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

          <section
            className={`flex overflow-hidden h-full`}
            style={{
              paddingTop: `calc(${MARGIN_TOP_INCH}in)`,
              paddingBottom: `calc(${MARGIN_BOTTOM_INCH}in)`,
              paddingRight: `calc(${MARGIN_RIGHT_INCH}in)`,
              paddingLeft: `calc(${MARGIN_LEFT_INCH}in)`,
            }}
          >
            {props.children}
          </section>
        </div>
      </div>
    </div>
  );
}
