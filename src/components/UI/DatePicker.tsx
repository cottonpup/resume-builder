import { useState } from 'react';
import {
  UpdateEducationData,
  UpdateEmploymentHistoryData,
} from '../../state/action-creators';
import { EmploymentElement, EducationElement } from '../../state/reducers/cvDataReducer';

interface Props {
  updateData: UpdateEmploymentHistoryData | UpdateEducationData;
  item: EmploymentElement | EducationElement;
}
function DatePicker(props: Props) {
  const [enterStartDate, setEnterStartDate] = useState(false);
  const [enterEndDate, setEnterEndDate] = useState(false);

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
    <div className="flex-[0_0_calc(50%_-_20px)]" onClick={handleModal}>
      <label className="flex text-sm text-slate-500 mb-1 text-left" htmlFor="start_date">
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
              props.item.startMonth
                ? `${props.item.startYear}, ${props.item.startMonth}`
                : props.item.startYear && props.item.startDateSelected
                ? props.item.startYear
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
                    id: props.item.id,
                    key: 'startYear',
                    value: props.item.startYear - 1,
                  });
                  props.updateData({
                    id: props.item.id,
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
                  props.item.startMonth // narrowing down a union type / narrow down / Union type
                    ? ''
                    : 'bg-[#1a91f0] text-white rounded-[19px]'
                }`}
                onClick={() => {
                  props.updateData({
                    id: props.item.id,
                    key: 'startMonth',
                    value: '',
                  });
                  props.updateData({
                    id: props.item.id,
                    key: 'startDateSelected',
                    value: true,
                  });
                  setEnterStartDate(false);
                }}
              >
                {props.item.startYear}
              </button>
              <button
                onClick={() => {
                  props.updateData({
                    id: props.item.id,
                    key: 'startYear',
                    value: props.item.startYear + 1,
                  });
                  props.updateData({
                    id: props.item.id,
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
                    props.item.startMonth !== month
                      ? 'hover:bg-[#deeefc] hover:text-[#1a91f0]'
                      : 'bg-[#1a91f0] text-white hover:bg-[#1170cd]'
                  } flex items-center justify-center rounded-[19px]`}
                  onClick={() => {
                    setEnterStartDate(false);
                    props.updateData({
                      id: props.item.id,
                      key: 'startMonth',
                      value: month,
                    });
                    props.updateData({
                      id: props.item.id,
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
              props.item.endMonth
                ? `${props.item.endYear}, ${props.item.endMonth}`
                : props.item.endDateSelected
                ? props.item.endYear
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
                    id: props.item.id,
                    key: 'endYear',
                    value: props.item.endYear - 1,
                  });
                  props.updateData({
                    id: props.item.id,
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
                  props.item.endMonth ? '' : 'bg-[#1a91f0] text-white rounded-[19px]'
                }`}
                onClick={() => {
                  props.updateData({
                    id: props.item.id,
                    key: 'endMonth',
                    value: '',
                  });
                  props.updateData({
                    id: props.item.id,
                    key: 'endDateSelected',
                    value: true,
                  });
                  setEnterEndDate(false);
                }}
              >
                {props.item.endYear}
              </button>
              <button
                onClick={() => {
                  props.updateData({
                    id: props.item.id,
                    key: 'endYear',
                    value: props.item.endYear + 1,
                  });
                  props.updateData({
                    id: props.item.id,
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
                    props.item.endMonth !== month
                      ? 'hover:bg-[#deeefc] hover:text-[#1a91f0]'
                      : 'bg-[#1a91f0] text-white hover:bg-[#1170cd]'
                  } flex items-center justify-center rounded-[19px]`}
                  onClick={() => {
                    props.updateData({
                      id: props.item.id,
                      key: 'endMonth',
                      value: month,
                    });
                    props.updateData({
                      id: props.item.id,
                      key: 'endDateSelected',
                      value: true,
                    });
                    setEnterEndDate(false);
                  }}
                >
                  {month}
                </button>
              ))}
            </div>
            <div>
              <label className="flex items-center justify-center mb-4">
                <input tabIndex={-1} type="checkbox" className="mr-2"></input>
                Currently work here
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
