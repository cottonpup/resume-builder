import { useState } from 'react';
import type {
  UpdateEmploymentHistoryDataAction,
  UpdatePersonalDetailAction,
} from '../../../state/actions';

interface Props {
  group_name: string;
  placeholder: string;
  label: string;
  reference: string;
  identifier?: string;
  value?: string;
  updateData(
    action:
      | UpdatePersonalDetailAction['payload']
      | UpdateEmploymentHistoryDataAction['payload'],
  ): void;
}

const InputText: React.FC<Props> = (props) => {
  const [entered, setEntered] = useState(false);

  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (props.group_name === 'personal_detail') {
  //     props.updateData({
  //       key: props.reference,
  //       value: e.target.value,
  //     });
  //   }
  //   if (props.group_name === 'employment_history') {
  //     props.updateData({
  //       key: props.reference,
  //       value: e.target.value,
  //       id: props.identifier,
  //     });
  //   }
  // };

  return (
    <section className="w-full">
      <label className="flex text-sm text-slate-500 mb-1" htmlFor={props.reference}>
        {props.label}
      </label>
      <input
        className="flex w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
        placeholder={props.placeholder}
        type="text"
        id={props.reference}
        defaultValue={props.value}
        onFocus={() => setEntered(!entered)}
        onBlur={() => setEntered(!entered)}
        onChange={(e) => {
          (props.identifier &&
            props.updateData({
              key: props.reference,
              value: e.target.value,
              id: props.identifier,
            })) ||
            props.updateData({
              key: props.reference,
              value: e.target.value,
            });
        }}
      />
      <div
        className={`border-b-2 ${
          !entered
            ? 'border-[#eff2f9] scale-x-50 opacity-0'
            : 'border-[#1a91f0] scale-x-100 opacity-1'
        } transition duration[0.1s]`}
      ></div>
    </section>
  );
};

export default InputText;
