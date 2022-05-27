import { bindActionCreators } from 'redux';
import { EducationElement } from '../../state/reducers/cvDataReducer';
import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators, State } from '../../state';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../UI/InputText';
import DatePicker from '../UI/DatePicker';
import RichTextEditor from '../UI/RichTextEditor';
import { RawDraftContentState } from 'draft-js';
import { AdditionWrapper } from '../UI/AdditionWrapper';

export function Education() {
  const state = useSelector((state: State) => state.cvData);
  const dispatch = useDispatch();
  const { add_education_data } = bindActionCreators(actionCreators, dispatch);
  const { update_education_data } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <Header>Education</Header>
      <Paragraph>
        A varied education on your resume sums up the value that your learnings and
        background will bring to job.
      </Paragraph>
      {state.education.map((item: EducationElement) => {
        return (
          <AdditionWrapper
            target={state.education}
            id={item.id}
            key={item.id}
            titleText={`${item.degree ? item.degree : ''}${
              item.degree && item.school ? ' at ' : ''
            }${item.school ? item.school : ''}`}
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
                  label="School"
                  reference="school"
                  updateData={update_education_data}
                  group_name={'education'}
                  identifier={item.id}
                />
                <div className="mr-[40px]"></div>
                <InputText
                  placeholder=""
                  label="Degree"
                  reference="degree"
                  updateData={update_education_data}
                  group_name={'education'}
                  identifier={item.id}
                />
              </div>
              <div className="flex w-full">
                <div className="flex  mb-[20px]">
                  <DatePicker updateData={update_education_data} item={item} />
                  <div className="mr-[40px]"></div>
                  <InputText
                    placeholder=""
                    label="City"
                    reference={`city`}
                    updateData={update_education_data}
                    group_name={'education'}
                    identifier={item.id}
                  />
                </div>
              </div>

              <label className="flex text-sm text-slate-500 -mb-2">Description</label>
              <RichTextEditor
                id={item.id}
                updateData={(rowDraftContentState: RawDraftContentState) => {
                  update_education_data({
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
        onClick={() => add_education_data(uuidv4())}
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
        <p className="text-left">Add education</p>
      </button>
    </>
  );
}
