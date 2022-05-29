import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

interface Props {
  month?: string;
  year?: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month?: string) => void;
}

export function DateInput(props: Props) {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  return (
    <div className="mr-2 relative">
      <input
        className="flex  w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
        type="text"
        onFocus={() => setIsPickerVisible(true)}
        placeholder="MM, YYYY"
        readOnly
        value={
          props.month && props.year
            ? `${props.month}, ${props.year}`
            : props.year
            ? props.year
            : ''
        }
      />
      <div
        className={`border-b-2 ${
          isPickerVisible
            ? 'border-[#1a91f0] scale-x-100 opacity-1'
            : 'border-[#eff2f9] scale-x-50 opacity-0'
        } transition duration[0.1s] mb-2`}
      ></div>

      {isPickerVisible && (
        <CalendarModal
          onOutsideClick={() => setIsPickerVisible(false)}
          month={props.month}
          year={props.year}
          onMonthChange={(month) => {
            setIsPickerVisible(false);
            props.onMonthChange(month);
          }}
          onYearChange={(year) => {
            if (props.year === year) setIsPickerVisible(false);
            props.onYearChange(year);
          }}
        />
      )}
    </div>
  );
}
