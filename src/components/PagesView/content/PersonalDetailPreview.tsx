import { State } from '../../../state';
import { useSelector } from 'react-redux';

export function PersonalDetailPreview() {
  const state = useSelector((state: State) => state.cvData);

  return (
    <section className="w-full flex items-center">
      <div
        className={`h-[4.3rem] w-[4rem] bg-cover mr-4 rounded-md bg-center ${
          !state.personal_detail.profile ? 'hidden' : ''
        }`}
        style={{
          backgroundImage: `${
            state.personal_detail.profile ? `url(${state.personal_detail.profile})` : ''
          }`,
        }}
      ></div>
      <div>
        <h1 className="text-left text-[36px]">{`${state.personal_detail.first_name} ${state.personal_detail.last_name}`}</h1>
        <p className="text-left text-[15px]">{state.personal_detail.job_title}</p>
      </div>
    </section>
  );
}
