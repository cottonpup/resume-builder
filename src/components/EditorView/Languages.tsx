import Header from '../UI/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators, State } from '../../state';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../UI/Inputs/InputText';
import { LanguagesElement } from '../../state/reducers/cvDataReducer';
import { Select } from '../UI/Inputs/Select';
import { AdditionWrapper } from '../UI/Inputs/AdditionWrapper';
import { useState } from 'react';

export function Languages() {
  const state = useSelector((state: State) => state.cvData);
  const dispatch = useDispatch();
  const { add_languages_data } = bindActionCreators(actionCreators, dispatch);
  const { update_languages_data } = bindActionCreators(actionCreators, dispatch);
  const { delete_languages_data } = bindActionCreators(actionCreators, dispatch);
  const { move_languages_data } = bindActionCreators(actionCreators, dispatch);
  const [draggingIndex, setDraggingIndex] = useState<number | undefined>(undefined);

  return (
    <>
      <Header>Languages</Header>
      <section onDragOver={(e) => e.preventDefault()}>
        {state.languages.map((item: LanguagesElement, i: number) => {
          return (
            <AdditionWrapper
              moveItem={move_languages_data}
              index={i}
              draggingIndex={draggingIndex}
              setDraggingIndex={setDraggingIndex}
              deleteItem={delete_languages_data}
              target={state.languages}
              id={item.id}
              key={item.id}
              titleText={item.language}
              extraText={item.level}
            >
              <div className="px-[20px] pt-[4px] pb-[24px]">
                <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[20px]">
                  <InputText
                    placeholder=""
                    label="Language"
                    reference="language"
                    updateData={update_languages_data}
                    group_name={'website_social_link'}
                    identifier={item.id}
                  />
                  <div className="mr-[40px]"></div>
                  <section className="w-full">
                    <label className="flex text-sm text-slate-500 mb-1" htmlFor={'level'}>
                      Level
                    </label>
                    <Select id={item.id} />
                  </section>
                </div>
              </div>
            </AdditionWrapper>
          );
        })}
      </section>
      <button
        className={`flex items-center py-[6px] px-[14px] text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 mt-5`}
        onClick={() => add_languages_data(uuidv4())}
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
        <p className="text-left">Add language</p>
      </button>
    </>
  );
}
