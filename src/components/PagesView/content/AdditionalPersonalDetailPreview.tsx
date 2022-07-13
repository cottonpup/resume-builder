import { State } from '../../../state';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

export function AdditionalPersonalDetailPreview() {
  const state = useSelector((state: State) => state.cvData);
  const showDetails = useCallback(() => {
    return Object.values([state.personal_detail][0]).some((value) => value);
  }, [state.personal_detail]);
  return (
    <>
      <section className="mb-1">
        <h2
          className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 ${
            !showDetails() ? 'hidden' : ''
          }`}
        >
          Details
        </h2>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.address}
        </p>
        <p className="text-left text-[12px] leading-snug">
          {`${state.personal_detail.city ? state.personal_detail.city : ''} ${
            state.personal_detail.postal_code
              ? `, ${state.personal_detail.postal_code}`
              : ''
          }`}
        </p>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.country}
        </p>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.phone}
        </p>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.email}
        </p>
      </section>
      <section className="mb-1">
        <h2
          className={`text-left text-[14px] font-bold leading-tight pt-1 text-cyan-700`}
        >
          {state.personal_detail.date_of_birth && !state.personal_detail.place_of_birth
            ? 'Date of birth'
            : ''}
          {state.personal_detail.date_of_birth && state.personal_detail.place_of_birth
            ? 'Date / '
            : ''}
          {state.personal_detail.place_of_birth ? 'Place of birth' : ''}
        </h2>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.place_of_birth}
        </p>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.date_of_birth}
        </p>
      </section>
      <section className="mb-1">
        <h2
          className={`text-left text-[14px] font-bold leading-tight pt-1 text-cyan-700  ${
            state.personal_detail.nationality ? '' : 'hidden'
          }`}
        >
          Nationality
        </h2>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.nationality}
        </p>
      </section>
      <section className="mb-1">
        <h2
          className={`text-left text-[14px] font-bold  leading-tight pt-1 text-cyan-700 ${
            state.personal_detail.driving_license ? '' : 'hidden'
          }`}
        >
          Driving license
        </h2>
        <p className="text-left text-[12px] leading-snug">
          {state.personal_detail.driving_license}
        </p>
      </section>
    </>
  );
}
