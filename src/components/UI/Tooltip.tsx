import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  content: string;
  className?: string;
  position?: string;
  tooltipLocation?: string;
}

export function Tooltip(props: Props) {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div className={props.className}>
      <div
        className={`relative ${isHovered ? 'fill-[#1a91f0]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className={`mb-[7px] absolute bottom-[100%] ${
              props.tooltipLocation === 'left'
                ? 'translate-x-[-10%] before:left-[10%]'
                : 'translate-x-[-50%] before:left-[50%]'
            } ml-[50%] bg-[#303848] text-[#eff2f9] whitespace-nowrap text-[12px] py-[5px] px-[8px] rounded-[3px] before:w-[8px] before:content-[''] before:h-[8px] before:bg-[#303848] before:top-[100%] before:block before:absolute 
  before:translate-x-[-50%] before:translate-y-[-50%] before:rotate-[45deg] before:rounded-br-[2px]`}
          >
            {props.content}
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
}
