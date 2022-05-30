import { State } from '../../state';
import { useSelector } from 'react-redux';

export function WebsiteSocialLinkPreview() {
  const state = useSelector((state: State) => state.cvData);
  return (
    <section className="mb-1">
      <h2
        className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 ${
          state.websites_social_links[0] ? '' : 'hidden'
        }`}
      >
        Links
      </h2>
      {state.websites_social_links.map((link) => (
        <a className="flex text-[12px] leading-snug" href={link.link} key={link.id}>
          {link.label}
        </a>
      ))}
    </section>
  );
}
