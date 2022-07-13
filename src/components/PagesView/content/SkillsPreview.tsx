import { State } from '../../../state';
import { useSelector } from 'react-redux';
export function SkillsPreview() {
  const state = useSelector((state: State) => state.cvData);
  return (
    <section className="mb-1">
      <h2
        className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 ${
          state.skills[0] ? '' : 'hidden'
        }`}
      >
        Skills
      </h2>
      {state.skills.map((skill) => (
        <p className="text-left text-[12px] leading-snug" key={skill.id}>
          {skill.skill}
        </p>
      ))}
    </section>
  );
}
