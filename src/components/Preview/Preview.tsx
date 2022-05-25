import { useCallback, useState } from 'react';
import { useWindowSize } from '../hooks/windowSizeHook';
import { State } from '../../state';
import { useSelector } from 'react-redux';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import './PreviewEditor.css';

const Preview = () => {
  const windowSize = useWindowSize();
  const state = useSelector((state: State) => state.cvData);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const showDetails = useCallback(() => {
    return Object.values([state.personal_detail][0]).some((value) => value);
  }, [state.personal_detail]);

  return (
    <div className="xl:w-1/2 xl:visible invisible bg-slate-500 fixed right-0 top-0 h-screen flex flex-col items-center">
      <div className="h-1 xl:w-[calc(29.7cm)]" />
      <div className="p-4 flex fill-[#ffffff] text-[#ffffff] items-center mb-2">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180 opacity-[0.3]"
          >
            <path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
          </svg>
        </div>
        <div className="text-sm">1 / 1</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-[0.3]"
          >
            <path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
          </svg>
        </div>
      </div>

      <div className="w-full flex-1 flex items-center justify-center leading-2 break-words">
        <div className="relative">
          <div
            className="bg-white aspect-[21/29.7] h-[1122.52px] min-w-[21cm] min-h-[29.7cm] rounded-md absolute overflow-hidden break-all"
            style={{
              transform: `translate(-50%, -50%) scale(calc(${windowSize.height - 130} /
          1122.52))`,
            }}
          >
            <div className="p-12 h-[1122.52px] min-h-[29.7cm] break-all">
              <section className="w-full flex items-center">
                <div
                  className={`h-[4.3rem] w-[4rem] bg-cover mr-4 rounded-md bg-center ${
                    !state.personal_detail.profile ? 'hidden' : ''
                  }`}
                  style={{
                    backgroundImage: `${
                      state.personal_detail.profile
                        ? `url(${state.personal_detail.profile})`
                        : ''
                    }`,
                  }}
                ></div>
                <div>
                  <h1 className="text-left text-[36px]">{`${state.personal_detail.first_name} ${state.personal_detail.last_name}`}</h1>
                  <p className="text-left text-[15px]">
                    {state.personal_detail.job_title}
                  </p>
                </div>
              </section>
              <section className="flex mt-4">
                <div className={`flex-[3_3_0%]`}>
                  <section
                    className={`${
                      state.professional_summary.blocks[0].text ? 'block' : 'hidden'
                    } `}
                    id={'preview'}
                  >
                    <div className={`flex items-center`}>
                      <i className="fa-solid fa-user mr-1"></i>
                      <h2 className="text-left text-[17px] font font-bold">Profile</h2>
                    </div>

                    <Editor
                      editorState={EditorState.createWithContent(
                        convertFromRaw(state.professional_summary),
                      )}
                      onChange={() => {}}
                      readOnly
                    />
                  </section>
                  <section id={'preview'}>
                    {state.employment_history.length > 0 &&
                      state.employment_history.map((item, i) => (
                        <>
                          <div className="flex items-center mt-2">
                            <i className="fa-solid fa-briefcase mr-1"></i>
                            <h2 className="text-left text-[17px] font font-bold">
                              Employment History
                            </h2>
                          </div>
                          <h3
                            className={`text-left text-[15px] font-medium ${
                              i > 0 ? 'mt-2' : ''
                            }`}
                          >
                            {`${item.job_title}${
                              item.employer && item.job_title
                                ? ` at ${item.employer}`
                                : item.employer
                            }${
                              item.employer || item.job_title
                                ? `, ${item.city}`
                                : item.city
                            }`}
                          </h3>
                          <p className="text-left text-[12px]">
                            {`${
                              item.startYear && item.startDateSelected
                                ? `${item.startYear} `
                                : ''
                            }${
                              item.startMonth && item.startDateSelected
                                ? item.startMonth
                                : ''
                            }${
                              item.endDateSelected && item.startDateSelected ? ' - ' : ''
                            }${
                              item.endYear && item.endDateSelected
                                ? `${item.endYear} `
                                : ''
                            }${
                              item.endMonth && item.endDateSelected ? item.endMonth : ''
                            }`}
                          </p>
                          {item.description.blocks[0].text && (
                            <Editor
                              editorState={EditorState.createWithContent(
                                convertFromRaw(item.description),
                              )}
                              onChange={() => {}}
                              readOnly
                            />
                          )}
                        </>
                      ))}
                  </section>
                  <section id={'preview'}>
                    {state.education.length > 0 &&
                      state.education.map((item, i) => (
                        <>
                          <div className="flex items-center mt-2">
                            <i className="fa-solid fa-graduation-cap mr-1"></i>
                            <h2 className="text-left text-[17px] font font-bold">
                              Education
                            </h2>
                          </div>

                          <h3
                            className={`text-left text-[15px] font-medium ${
                              i > 0 ? 'mt-2' : ''
                            }`}
                          >
                            {`${item.school}${
                              item.degree && item.school
                                ? ` at ${item.degree}`
                                : item.degree
                            }${
                              item.degree && item.school ? `, ${item.city}` : item.city
                            }`}
                          </h3>
                          <p className="text-left text-[12px]">
                            {`${
                              item.startYear && item.startDateSelected
                                ? `${item.startYear} `
                                : ''
                            }${
                              item.startMonth && item.startDateSelected
                                ? item.startMonth
                                : ''
                            }${
                              item.endDateSelected && item.startDateSelected ? ' - ' : ''
                            }${
                              item.endYear && item.endDateSelected
                                ? `${item.endYear} `
                                : ''
                            }${
                              item.endMonth && item.endDateSelected ? item.endMonth : ''
                            }`}
                          </p>
                          <Editor
                            editorState={EditorState.createWithContent(
                              convertFromRaw(item.description),
                            )}
                            onChange={() => {}}
                            readOnly
                          />
                        </>
                      ))}
                  </section>
                </div>
                <div className="flex-1">
                  <section>
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
                        {`${
                          state.personal_detail.city ? state.personal_detail.city : ''
                        } ${
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
                        {state.personal_detail.date_of_birth &&
                        !state.personal_detail.place_of_birth
                          ? 'Date of birth'
                          : ''}
                        {state.personal_detail.date_of_birth &&
                        state.personal_detail.place_of_birth
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
                  </section>

                  <section className="mb-1">
                    <h2
                      className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 ${
                        state.websites_social_links[0] ? '' : 'hidden'
                      }`}
                    >
                      Links
                    </h2>
                    {state.websites_social_links.map((link) => (
                      <a
                        className="flex text-[12px] leading-snug"
                        href={link.link}
                        key={link.id}
                      >
                        {link.label}
                      </a>
                    ))}
                  </section>
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
                  <section className="mb-1">
                    <h2
                      className={`text-left text-[14px] font-bold leading-tight pt-2 text-cyan-700 mb-2 ${
                        state.languages[0] ? '' : 'hidden'
                      }`}
                    >
                      Languages
                    </h2>
                    {state.languages.map((language, i) => (
                      <div key={i}>
                        <p className="text-left text-[12px] leading-snug">
                          {language.language}
                        </p>
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-white fill-white flex items-center justify-between mt-3 w-[30rem]">
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path d="M5.5 5.5v4h4v-4h-4zM11 4v7H4V4h7zm3.5 1.5v4h4v-4h-4zM20 4v7h-7V4h7zM5.5 14.5v4h4v-4h-4zM11 13v7H4v-7h7zm3.5 1.5v4h4v-4h-4zM20 13v7h-7v-7h7z"></path>
          </svg>

          <div>Select template</div>
        </div>
        <div className="flex items-center">
          <button className="py-[13px] px-6 bg-[#1a91f0] rounded-md mr-2 font-bold">
            <p>Download PDF</p>
          </button>
          <div className="relative">
            <button
              className="py-[13px] px-6 bg-[#1a91f0] rounded-md"
              onClick={() => setShowOptionsModal(!showOptionsModal)}
            >
              <div className="mr-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5,14 C5.67157288,14 5,13.3284271 5,12.5 C5,11.6715729 5.67157288,11 6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 Z M12.5,14 C11.6715729,14 11,13.3284271 11,12.5 C11,11.6715729 11.6715729,11 12.5,11 C13.3284271,11 14,11.6715729 14,12.5 C14,13.3284271 13.3284271,14 12.5,14 Z M18.5,14 C17.6715729,14 17,13.3284271 17,12.5 C17,11.6715729 17.6715729,11 18.5,11 C19.3284271,11 20,11.6715729 20,12.5 C20,13.3284271 19.3284271,14 18.5,14 Z"></path>
                </svg>
              </div>
            </button>
            <div
              className={`absolute z-[1] bg-white py-[10px] left-auto right-0 bottom-[100%] rounded-[4px] mb-[8px] text-black fill-[#1a91f0] whitespace-nowrap ${
                showOptionsModal ? '' : 'hidden'
              }`}
              style={{
                boxShadow:
                  'rgb(23 68 130 / 20%) 0px 0px 1px, rgb(23 68 130 / 15%) 0px 2px 14px',
              }}
            >
              <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
                <div className="mr-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 19V7.82843L14.1716 5H7v14h10zm1 2H6c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h8.5858c.2652 0 .5196.10536.7071.29289l3.4142 3.41422c.1875.18753.2929.44189.2929.7071V20c0 .5523-.4477 1-1 1z M10.5169 12.8175L9.66292 10H8l1.75281 5h1.30339L12 12.2222 12.9438 15h1.3034L16 10h-1.6629l-.854 2.8175L12.5393 10h-1.0786l-.9438 2.8175z"></path>
                  </svg>
                </div>
                <div>Export to DOCX</div>
              </div>
              <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
                <div className="mr-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 19V7.87116L14.1643 5H7v14h10zm1 2H6c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h8.5821c.2674 0 .5236.10707.7115.2973l3.4179 3.46058c.1848.18717.2885.43963.2885.7027V20c0 .5523-.4477 1-1 1z M15 10H9v2h2v4h2v-4h2v-2z"></path>
                  </svg>
                </div>
                <div>Export to TXT</div>
              </div>
              <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
                <div className="mr-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.636 11.646l1.945-1.944 1.414 1.414-1.945 1.945a2.75 2.75 0 103.89 3.889l1.944-1.945 1.414 1.414-1.944 1.945a4.75 4.75 0 11-6.718-6.718zM16.95 10.94l-1.945 1.944 1.414 1.414 1.945-1.944a4.75 4.75 0 00-6.718-6.718L9.702 7.581l1.414 1.414 1.945-1.945a2.75 2.75 0 013.889 3.89z M9.313 13.273a.7.7 0 000 .99l.424.424a.7.7 0 00.99 0l3.96-3.96a.7.7 0 000-.99l-.424-.424a.7.7 0 00-.99 0l-3.96 3.96z"></path>
                  </svg>
                </div>
                <div>Share a link</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
