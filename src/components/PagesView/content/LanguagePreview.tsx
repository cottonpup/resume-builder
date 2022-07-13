import { State } from '../../../state';
import { useSelector } from 'react-redux';
export function LanguagePreview() {
  const state = useSelector((state: State) => state.cvData);
  return (
    <section className="mb-1">
      <h2
        className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 mb-2 ${
          state.languages[0] ? '' : 'hidden'
        }`}
      >
        Languages
      </h2>
      {state.languages.map((language, i) => (
        <div key={language.id}>
          <p className="text-left text-[12px] leading-snug">{language.language}</p>
          <section className="h-1 bg-slate-100 mb-2 mt-1">
            <div
              className={`h-1 bg-slate-500`}
              style={{
                width: `${language.proficiency}%`,
              }}
            ></div>
          </section>
        </div>
      ))}
    </section>
  );
}
