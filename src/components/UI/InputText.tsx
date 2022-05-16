import { ChangeEvent, useState } from 'react';

interface Props {
  placeholder: string;
  label: string;
  reference: string;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = (props) => {
  const [entered, setEntered] = useState(false);

  return (
    <section className="w-full">
      <label className="flex text-sm text-slate-500 mb-1" htmlFor={props.reference}>
        {props.label}
      </label>
      <input
        // size={29}
        className="flex w-full px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
        placeholder={props.placeholder}
        type="text"
        id={props.reference}
        onFocus={() => setEntered(!entered)}
        onBlur={() => setEntered(!entered)}
        onChange={props.handleInputChange}
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
