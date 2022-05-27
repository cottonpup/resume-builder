import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  content: string;
  className?: string;
  position?: string;
}

export function Tooltip(props: Props) {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div className={props.className}>
      <div
        className="relative"
        //   onMouseEnter={() => setIsHovered(true)}
        //   onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className={`absolute bottom-[100%] ml-[50%] translate-x-[-50%] bg-[#303848] text-[#eff2f9] whitespace-nowrap`}
          >
            {props.content}
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
}
