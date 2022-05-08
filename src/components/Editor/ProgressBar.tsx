import Paragraph from '../UI/Paragraph';

const ProgressBar: React.FC = () => {
  return (
    <>
      <section className="mb-2 flex justify-between">
        <Paragraph>
          <div className="pr-1 font-bold text-red-500">10 %</div>Profile completeness
        </Paragraph>
        <Paragraph>
          <div className="pr-1 font-bold text-emerald-600">+10 %</div>Add profile summary
        </Paragraph>
      </section>
      <section className="h-1 bg-slate-100 mb-8">
        <div className="w-[10%] h-1 bg-red-500"></div>
      </section>
    </>
  );
};

export default ProgressBar;
