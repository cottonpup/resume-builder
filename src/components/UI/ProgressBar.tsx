import Paragraph from '../UI/Paragraph';
import { State } from '../../state';
import { useSelector } from 'react-redux';

const ProgressBar: React.FC = () => {
  const state = useSelector((state: State) => state.cvData);

  const progressRate = () => {
    let rate = 10;
    if (state.personal_detail.job_title) {
      rate = rate + 10;
    }
    if (
      state.personal_detail.email ||
      state.personal_detail.address ||
      state.personal_detail.phone ||
      state.personal_detail.country
    ) {
      rate = rate + 10;
    }

    if (state.personal_detail.profile) {
      rate = rate + 10;
    }

    if (state.professional_summary.blocks[0].text) {
      rate = rate + 10;
    }
    if (state.employment_history.length) {
      rate = rate + 10;
    }
    if (state.education.length) {
      rate = rate + 10;
    }
    if (state.websites_social_links.length) {
      rate = rate + 10;
    }
    if (state.skills.length) {
      rate = rate + 10;
    }
    if (state.languages.length) {
      rate = rate + 10;
    }

    return rate;
  };

  return (
    <>
      <section className="mb-2 flex justify-between">
        <Paragraph>
          <div className="pr-1 font-bold text-red-500">{`${progressRate()} %`}</div>
          Profile completeness
        </Paragraph>
        <Paragraph>
          <div className="pr-1 font-bold text-emerald-600">+10 % </div>Fill in your
          details!
        </Paragraph>
      </section>
      <section className="h-1 bg-slate-100 mb-8">
        <div
          className={`h-1 bg-red-500`}
          style={{
            width: progressRate() + '%',
          }}
        ></div>
      </section>
    </>
  );
};

export default ProgressBar;
