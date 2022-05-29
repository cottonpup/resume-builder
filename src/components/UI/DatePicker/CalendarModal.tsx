import { useEffect, useRef } from 'react';
import { RightArrowButton } from './RightArrowButton';

interface Props {
  month?: string;
  year?: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month?: string) => void;
  onOutsideClick: () => void;
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function CalendarModal(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const isOutsideClick = !ref.current!.contains(e.target as Node);
      if (isOutsideClick) props.onOutsideClick();
    }

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const year = props.year || new Date().getFullYear();
  return (
    <div
      ref={ref}
      className={`bg-[#eff2f9] absolute w-[256px] z-10 shadow-[rgb(190_196_213_/_70%)_0px_14px_16px_-10px,_rgb(190_196_213_/_12%)_0px_20px_40px_-8px]`}
    >
      {/* Year controls */}
      <div className="flex px-[24px] pt-[13px] pb-[8px] justify-between items-center">
        <RightArrowButton
          className="rotate-180"
          onClick={() => props.onYearChange(year - 1)}
        />

        <button
          onClick={() => {
            props.onMonthChange(undefined);
            props.onYearChange(year);
          }}
          className={`px-4 leading-[38px] font-semibold ${
            props.month ? '' : 'bg-[#1a91f0] text-white rounded-[19px]'
          }`}
        >
          {year}
        </button>

        <RightArrowButton onClick={() => props.onYearChange(year + 1)} />
      </div>

      {/* Months */}
      <div className="flex flex-wrap mx-3 mb-3 items-center">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => {
              props.onYearChange(year);
              props.onMonthChange(month);
            }}
            className={`w-[58px] h-[38px] ${
              props.month !== month
                ? 'hover:bg-[#deeefc] hover:text-[#1a91f0]'
                : 'bg-[#1a91f0] text-white hover:bg-[#1170cd]'
            } flex items-center justify-center rounded-[19px]`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
