import Paragraph from './Paragraph';

interface Props {
  // progressPercent: number;
}

const ProgressBar: React.FC<Props> = (props) => {
  return (
    <>
      <section className="mb-2 flex justify-between">
        <Paragraph>
          {/* <div className="pr-1 font-bold text-red-500">{`${props.progressPercent} %`}</div> */}
          Profile completeness
        </Paragraph>
        <Paragraph>
          <div className="pr-1 font-bold text-emerald-600">+10 % </div>Fill in your
          details!
        </Paragraph>
      </section>
      <section className="h-1 bg-slate-100 mb-8">
        {/* <div className={`w-[${props.progressPercent}%] h-1 bg-red-500`}></div> */}
      </section>
    </>
  );
};

export default ProgressBar;
