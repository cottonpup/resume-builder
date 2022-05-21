import { EditorState } from 'draft-js';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  AddEmploymentHistoryData,
  AddEducationData,
  UpdateEmploymentHistoryData,
} from '../../state/action-creators';
import { EducationElement, EmploymentElement } from '../../state/reducers/cvDataReducer';
import DraftEditor from './DraftEditor';
import InputText from './InputText';

interface Props {
  children: string;
  updateData: UpdateEmploymentHistoryData;
  listItems: EmploymentElement[] | EducationElement[];
  addData: AddEmploymentHistoryData | AddEducationData;
  group_name: string; // employment_history
}

function TextAddition(props: Props) {
  // const state = useSelector((state: State) => state.cvData);

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [enterStartDate, setEnterStartDate] = useState(false);
  const [enterEndDate, setEnterEndDate] = useState(false);

  // const [startDate, setStartDate] = useState({
  //   startYear: new Date().getFullYear(),
  //   startMonth: '',
  //   selected: false,
  // });
  // const [endDate, setEndDate] = useState({
  //   endYear: new Date().getFullYear(),
  //   endMonth: '',
  //   selected: false,
  // });

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

  const handleModal = (e: React.MouseEvent) => {
    if (!(e.target instanceof Element)) return;

    if (!e.target.closest('#date-picker')) {
      setEnterStartDate(false);
      setEnterEndDate(false);
    }

    if (enterStartDate === true && e.target.closest('#end-date-picker')) {
      setEnterStartDate(false);
    }

    if (enterEndDate === true && e.target.closest('#start-date-picker')) {
      setEnterEndDate(false);
    }
  };

  return (
    <>
      {props.listItems.map((item) => (
        <div
          className={`my-4 ${
            props.listItems.length > 0 ? '' : 'hidden'
          } border-[1px] border-[#e7eaf4]`}
          key={item.id}
          onClick={handleModal}
        >
          <div className="flex justify-between items-center py-[15px] px-[20px] rounded-[4px] h-[70px]">
            <div className=" text-sm font-semibold">(Not specified)</div>

            <div className="rotate-90 fill-[#9fa6bb]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
              </svg>
            </div>
          </div>
          <div className="px-[20px] pt-[4px] pb-[24px]">
            <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[24px]">
              <InputText
                placeholder=""
                label="Job title"
                reference="job_title"
                updateData={props.updateData}
                group_name={props.group_name}
                identifier={item.id}
              />
              <div className="mr-[40px]"></div>
              <InputText
                placeholder=""
                label="Employer"
                reference="employer"
                updateData={props.updateData}
                group_name={props.group_name}
                identifier={item.id}
              />
            </div>
            <div className="flex w-full">
              <div className="flex  mb-[24px]">
                {'startYear' in item && (
                  <div className="flex-[0_0_calc(50%_-_20px)]">
                    <label
                      className="flex text-sm text-slate-500 mb-1 text-left"
                      htmlFor="start_date"
                    >
                      Start & End Date
                    </label>
                    <div className="flex" id="date-picker">
                      <div className="mr-2 relative" id="start-date-picker">
                        <input
                          className="flex  w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
                          type="text"
                          id="start_date"
                          onFocus={() => setEnterStartDate(!enterStartDate)}
                          placeholder="MM / YYYY"
                          value={
                            item.startMonth
                              ? `${item.startYear}, ${item.startMonth}`
                              : item.startYear && item.startDateSelected
                              ? item.startYear
                              : ''
                          }
                        />
                        <div
                          className={`border-b-2 ${
                            !enterStartDate
                              ? 'border-[#eff2f9] scale-x-50 opacity-0'
                              : 'border-[#1a91f0] scale-x-100 opacity-1'
                          } transition duration[0.1s] mb-2`}
                        ></div>

                        <div
                          className={`bg-[#eff2f9] absolute w-[256px] z-10 shadow-[rgb(190_196_213_/_70%)_0px_14px_16px_-10px,_rgb(190_196_213_/_12%)_0px_20px_40px_-8px] ${
                            enterStartDate ? '' : 'hidden'
                          }`}
                        >
                          <div className="flex px-[24px] pt-[13px] pb-[8px] justify-between items-center">
                            <button
                              className="rotate-180"
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'startYear',
                                  value: item.startYear - 1,
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'startDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                fill="#1a91f0"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                              </svg>
                            </button>

                            <button
                              className={`px-4 leading-[38px] font-semibold ${
                                item.startMonth // narrowing down a union type / narrow down / Union type
                                  ? ''
                                  : 'bg-[#1a91f0] text-white rounded-[19px]'
                              }`}
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'startMonth',
                                  value: '',
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'startDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              {item.startYear}
                            </button>
                            <button
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'startYear',
                                  value: item.startYear + 1,
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'startDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                fill="#1a91f0"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-wrap mx-3 mb-3 items-center">
                            {months.map((month, i) => (
                              <button
                                data-number={i + 1}
                                key={month}
                                className={`w-[58px] h-[38px] ${
                                  item.startMonth !== month
                                    ? 'hover:bg-[#deeefc] hover:text-[#1a91f0]'
                                    : 'bg-[#1a91f0] text-white hover:bg-[#1170cd]'
                                } flex items-center justify-center rounded-[19px]`}
                                onClick={() => {
                                  props.updateData({
                                    id: item.id,
                                    key: 'startMonth',
                                    value: month,
                                  });
                                  props.updateData({
                                    id: item.id,
                                    key: 'startDateSelected',
                                    value: true,
                                  });
                                }}
                              >
                                {month}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div id="end-date-picker">
                        <input
                          className="flex relative w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
                          type="text"
                          id="end_date"
                          onFocus={() => setEnterEndDate(true)}
                          value={
                            item.endMonth
                              ? `${item.endYear}, ${item.endMonth}`
                              : item.endDateSelected
                              ? item.endYear
                              : ''
                          }
                          placeholder="MM / YYYY"
                        />
                        <div
                          className={`border-b-2 ${
                            !enterEndDate
                              ? 'border-[#eff2f9] scale-x-50 opacity-0'
                              : 'border-[#1a91f0] scale-x-100 opacity-1'
                          } transition duration[0.1s] mb-2`}
                        ></div>
                        <div
                          className={`bg-[#eff2f9] absolute w-[256px] z-10 shadow-[rgb(190_196_213_/_70%)_0px_14px_16px_-10px,_rgb(190_196_213_/_12%)_0px_20px_40px_-8px] ${
                            enterEndDate ? '' : 'hidden'
                          }`}
                        >
                          <div className="flex px-[24px] pt-[13px] pb-[8px] justify-between items-center">
                            <button
                              className="rotate-180"
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'endYear',
                                  value: item.endYear - 1,
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'endDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                fill="#1a91f0"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                              </svg>
                            </button>
                            <button
                              className={`px-4 leading-[38px] font-semibold ${
                                item.endMonth
                                  ? ''
                                  : 'bg-[#1a91f0] text-white rounded-[19px]'
                              }`}
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'endMonth',
                                  value: '',
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'endDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              {item.endYear}
                            </button>
                            <button
                              onClick={() => {
                                props.updateData({
                                  id: item.id,
                                  key: 'endYear',
                                  value: item.endYear + 1,
                                });
                                props.updateData({
                                  id: item.id,
                                  key: 'endDateSelected',
                                  value: true,
                                });
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                fill="#1a91f0"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-wrap mx-3 mb-1 items-center">
                            {months.map((month, i) => (
                              <button
                                data-number={i + 1}
                                key={month}
                                className={`w-[58px] h-[38px] ${
                                  item.endMonth !== month
                                    ? 'hover:bg-[#deeefc] hover:text-[#1a91f0]'
                                    : 'bg-[#1a91f0] text-white hover:bg-[#1170cd]'
                                } flex items-center justify-center rounded-[19px]`}
                                onClick={() => {
                                  props.updateData({
                                    id: item.id,
                                    key: 'endMonth',
                                    value: month,
                                  });
                                  props.updateData({
                                    id: item.id,
                                    key: 'endDateSelected',
                                    value: true,
                                  });
                                }}
                              >
                                {month}
                              </button>
                            ))}
                          </div>
                          <div>
                            <label className="flex items-center justify-center mb-4">
                              <input
                                tabIndex={-1}
                                type="checkbox"
                                className="mr-2"
                              ></input>
                              Currently work here
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mr-[40px]"></div>
                <InputText
                  placeholder=""
                  label="City"
                  reference={`city`}
                  updateData={props.updateData}
                  group_name={props.group_name}
                  identifier={item.id}
                />
              </div>
            </div>

            <label className="flex text-sm text-slate-500 -mb-2">Description</label>
            <DraftEditor editorState={editorState} setEditorState={setEditorState} />
          </div>
        </div>
      ))}
      <button
        className={`flex items-center py-[6px] px-[14px] text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10`}
        onClick={() => props.addData(uuidv4())}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
        <p className="text-left">{props.children}</p>
      </button>
    </>
  );
}

export default TextAddition;
