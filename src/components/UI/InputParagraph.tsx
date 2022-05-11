import { ChangeEvent, useState } from 'react';

interface Props {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputParagraph: React.FC<Props> = (props) => {
  const [entered, setEntered] = useState(false);

  return (
    <section className="w-full">
      <input
        // size={29}
        className="flex w-full h-10 px-5 py-3 bg-[#eff2f9] rounded-sm caret-[#1a91f0] focus:outline-none"
        type="text"
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

export default InputParagraph;
