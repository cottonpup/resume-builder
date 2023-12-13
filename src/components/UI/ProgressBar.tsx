import Paragraph from '../UI/Paragraph';
import { State } from '../../state';
import { useSelector } from 'react-redux';

export function ProgressBar() {
  const state = useSelector((state: State) => state.cvData);

  const progressRate = () => {
    let rate = 0;
    const {
      personal_detail,
      professional_summary,
      employment_history,
      education,
      websites_social_links,
      skills,
      languages,
    } = state;

    if (personal_detail.job_title) {
      rate += 10;
    }
    if (
      personal_detail.email ||
      personal_detail.address ||
      personal_detail.phone ||
      personal_detail.country
    ) {
      rate += 10;
    }
    if (personal_detail.profile) {
      rate += 10;
    }
    if (professional_summary.blocks[0].text) {
      rate += 10;
    }
    if (employment_history.length) {
      rate += 10;
    }
    if (education.length) {
      rate += 10;
    }
    if (websites_social_links.length) {
      rate += 10;
    }
    if (skills.length) {
      rate += 10;
    }
    if (languages.length) {
      rate += 10;
    }

    return rate;
  };

  return (
    <div>
      <section className="mb-2 flex justify-between bg-white w-auto">
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
    </div>
  );
}
