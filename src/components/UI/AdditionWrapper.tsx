import { useState } from 'react';
import {
  EducationElement,
  EmploymentElement,
  LanguagesElement,
  SkillsElement,
  WebsiteSocialElement,
} from '../../state/reducers/cvDataReducer';

interface Props {
  titleText?: string;
  extraText?: string;
  target:
    | EducationElement[]
    | EmploymentElement[]
    | LanguagesElement[]
    | SkillsElement[]
    | WebsiteSocialElement[];
  id: string;
  children: React.ReactNode;
}

export function AdditionWrapper(props: Props) {
  const [hideDetail, setHideDetail] = useState(true);
  return (
    <div
      className={`my-2 ${
        props.target.length > 0 ? '' : 'hidden'
      } border-[1px] border-[#e7eaf4]`}
      key={props.id}
    >
      <div className="flex justify-between items-center py-[15px] px-[20px] rounded-[4px] h-[70px]">
        <div>
          <div className="text-sm font-semibold text-left">
            {props.titleText ? props.titleText : '(Not specified)'}
          </div>
          <p className="flex text-sm text-slate-500 mt-1">{props.extraText}</p>
        </div>
        <button
          className="rotate-90 fill-[#9fa6bb]"
          onClick={() => setHideDetail(!hideDetail)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          hideDetail ? `opacity-0 h-0 overflow-hidden` : `opacity-100 h-full block`
        } transition-all`}
      >
        {props.children}
      </div>
    </div>
  );
}
