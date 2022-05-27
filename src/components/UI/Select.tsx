import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  id: string;
}

export function Select(props: Props) {
  const [entered, setEntered] = useState(false);
  const dispatch = useDispatch();
  const { update_languages_data } = bindActionCreators(actionCreators, dispatch);
  const optionMap = [
    { value: 'Select level', proficiency: 0 },
    { value: 'Native speaker', proficiency: 100 }, // 100
    { value: 'Highly proficient', proficiency: 80 }, // 80
    { value: 'Very good command', proficiency: 60 }, // 60
    { value: 'Good working knowledge', proficiency: 40 }, // 40
    { value: 'Working knowledge', proficiency: 20 }, // 20
    { value: 'C2', proficiency: 100 }, // 100
    { value: 'C1', proficiency: 84 }, // 84
    { value: 'B2', proficiency: 68 }, // 68
    { value: 'B1', proficiency: 52 }, // 52
    { value: 'A2', proficiency: 36 }, // 36
    { value: 'A1', proficiency: 20 }, // 20
  ];

  return (
    <>
      <select
        name="level"
        id="level"
        className="flex w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
        onFocus={() => setEntered(!entered)}
        onBlur={() => setEntered(!entered)}
        onChange={(e) => {
          update_languages_data({
            id: props.id,
            key: 'level',
            value: e.target.value,
          });
          let targetProficiency = Object.values(optionMap).find(
            (_, i) => optionMap[i].value === e.target.value,
          );
          update_languages_data({
            id: props.id,
            key: 'proficiency',
            value: targetProficiency!.proficiency,
          });
        }}
      >
        {optionMap.map((option, i) => (
          <option value={i !== 0 ? option.value : ''} key={option.value}>
            {option.value}
          </option>
        ))}
      </select>

      <div
        className={`border-b-2 ${
          !entered
            ? 'border-[#eff2f9] scale-x-50 opacity-0'
            : 'border-[#1a91f0] scale-x-100 opacity-1'
        } transition duration[0.1s]`}
      ></div>
    </>
  );
}
