import { useState } from 'react';
import {
  DispatchDeleteEducation,
  DispatchDeleteEmploymentHistory,
  DispatchDeleteLanguages,
  DispatchDeleteSkills,
  DispatchDeleteWebsitesSocialLinks,
} from '../../state/action-creators';
import {
  EducationElement,
  EmploymentElement,
  LanguagesElement,
  SkillsElement,
  WebsiteSocialElement,
} from '../../state/reducers/cvDataReducer';
import { Tooltip } from './Tooltip';

interface Props {
  titleText?: string;
  extraText?: string;
  deleteItem:
    | DispatchDeleteSkills
    | DispatchDeleteEducation
    | DispatchDeleteWebsitesSocialLinks
    | DispatchDeleteLanguages
    | DispatchDeleteEmploymentHistory;
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
  const [hoverWrapper, setHoverWrapper] = useState(false);

  return (
    <div>
      <div className="fill-[#9fa6bb]">
        <div
          className="relative w-[100%]"
          onMouseEnter={() => setHoverWrapper(true)}
          onMouseLeave={() => setHoverWrapper(false)}
        >
          <Tooltip
            content="Click and drag to move"
            className="absolute right-full mt-[27px] mr-[8px]"
            tooltipLocation="left"
          >
            <svg
              className={`cursor-pointer transition-opacity ease-in-out duration-[0.15s] ${
                hoverWrapper ? 'opacity-1' : 'opacity-0'
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.5 4c0 .82843-.67157 1.5-1.5 1.5S5.5 4.82843 5.5 4 6.17157 2.5 7 2.5s1.5.67157 1.5 1.5zM7 11.5c.82843 0 1.5-.6716 1.5-1.5 0-.82843-.67157-1.5-1.5-1.5s-1.5.67157-1.5 1.5c0 .8284.67157 1.5 1.5 1.5zm0 6c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5zm6 0c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5zm1.5-7.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5c0-.82843.6716-1.5 1.5-1.5s1.5.67157 1.5 1.5zM13 5.5c.8284 0 1.5-.67157 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.67157-1.5 1.5.6716 1.5 1.5 1.5z"></path>
            </svg>
          </Tooltip>
          <Tooltip content="Delete" className="absolute left-full mt-[27px] ml-[8px]">
            <svg
              className={`cursor-pointer transition-opacity ease-in-out duration-[0.15s] ${
                hoverWrapper ? 'opacity-1' : 'opacity-0'
              }`}
              onClick={() => {
                props.deleteItem(props.id);
              }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 6h3v2H3V6h3V3c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v3zm-9 4h10v8H5v-8zm2 6h6v-4H7v4zm5-10V4H8v2h4z"></path>
            </svg>
          </Tooltip>
        </div>
        <div
          className={`my-2 ${
            props.target.length > 0 ? '' : 'hidden'
          } border-[1px] border-[#e7eaf4]`}
          key={props.id}
        >
          <div
            className={`flex justify-between items-center py-[15px] px-[20px] rounded-[4px] h-[70px] cursor-pointer ${
              hoverWrapper ? 'text-[#1a91f0]' : ''
            } transition-color ease-in-out duration-[0.15s]`}
            onClick={() => setHideDetail(!hideDetail)}
            onMouseEnter={() => setHoverWrapper(true)}
            onMouseLeave={() => setHoverWrapper(false)}
          >
            <div>
              <div className="text-sm font-semibold text-left">
                {props.titleText ? props.titleText : '(Not specified)'}
              </div>
              <p className="flex text-sm text-slate-500 mt-1">{props.extraText}</p>
            </div>
            <button
              className={`${hideDetail ? 'rotate-90' : 'rotate-[270deg]'} fill-[#9fa6bb]`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  hoverWrapper ? 'fill-[#1a91f0]' : ''
                } transition-color ease-in-out duration-[0.15s] `}
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
      </div>
    </div>
  );
}
