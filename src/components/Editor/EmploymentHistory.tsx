import { RawDraftContentState } from 'draft-js';
import { v4 as uuidv4 } from 'uuid';
import { EmploymentElement } from '../../state/reducers/cvDataReducer';
import DatePicker from '../UI/DatePicker';
import RichTextEditor from '../UI/RichTextEditor';
import InputText from '../UI/InputText';
import Paragraph from '../UI/Paragraph';
import Header from '../UI/Header';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { useDispatch } from 'react-redux';
import { AdditionWrapper } from '../UI/AdditionWrapper';

// TODO: Split component into small components
export function EmploymentHistory() {
  const state = useSelector((state: State) => state.cvData);

  const dispatch = useDispatch();
  const { add_employment_history_data } = bindActionCreators(actionCreators, dispatch);
  const { update_employment_history_data } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div className="mb-10"></div>
      <Header>Employment History</Header>
      <Paragraph>
        Show your relevant experience (last 10 years). Use bullet points to note your
        achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing
        Z).
      </Paragraph>
      {state.employment_history.map((item: EmploymentElement) => {
        return (
          <AdditionWrapper
            target={state.employment_history}
            id={item.id}
            titleText={`${item.job_title ? item.job_title : ''}${
              item.job_title && item.employer ? ' at ' : ''
            }${item.employer ? item.employer : ''}`}
            extraText={`${
              item.startYear && item.startDateSelected ? `${item.startYear} ` : ''
            }${item.startMonth && item.startDateSelected ? item.startMonth : ''}${
              item.endDateSelected && item.startDateSelected ? ' - ' : ''
            }${item.endYear && item.endDateSelected ? `${item.endYear} ` : ''}${
              item.endMonth && item.endDateSelected ? item.endMonth : ''
            }`}
          >
            <div className="px-[20px] pt-[4px] pb-[24px]">
              <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[20px]">
                <InputText
                  placeholder=""
                  label="Job title"
                  reference="job_title"
                  updateData={update_employment_history_data}
                  group_name={'employment_history'}
                  identifier={item.id}
                />
                <div className="mr-[40px]"></div>
                <InputText
                  placeholder=""
                  label="Employer"
                  reference="employer"
                  updateData={update_employment_history_data}
                  group_name={'employment_history'}
                  identifier={item.id}
                />
              </div>
              <div className="flex w-full">
                <div className="flex  mb-[20px]">
                  <DatePicker updateData={update_employment_history_data} item={item} />
                  <div className="mr-[40px]"></div>
                  <InputText
                    placeholder=""
                    label="City"
                    reference={`city`}
                    updateData={update_employment_history_data}
                    group_name={'employment_history'}
                    identifier={item.id}
                  />
                </div>
              </div>

              <label className="flex text-sm text-slate-500 -mb-2">Description</label>
              <RichTextEditor
                id={item.id}
                updateData={(rowDraftContentState: RawDraftContentState) => {
                  update_employment_history_data({
                    id: item.id,
                    key: 'description',
                    value: rowDraftContentState,
                  });
                }}
                placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of ..."
              />
            </div>
          </AdditionWrapper>
        );
      })}
      <button
        className={`flex items-center py-[6px] px-[14px] text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 mt-5`}
        onClick={() => add_employment_history_data(uuidv4())}
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
        <p className="text-left">Add employment</p>
      </button>
    </>
  );
}
