import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { useDispatch, useSelector } from 'react-redux';

function InputFile() {
  const dispatch = useDispatch();
  const { update_personal_detail_data } = bindActionCreators(actionCreators, dispatch);

  const [isHover, setIsHover] = useState(false);
  const state = useSelector((state: State) => state.cvData);

  return (
    <section
      className="flex w-full mt-4 items-center cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <label
        className={`h-14 w-14 
        ${isHover ? 'bg-[#eaf6ff]' : 'bg-[#eff2f9]'} 
        flex justify-center items-center mr-4 rounded-sm cursor-pointer 
        bg-center bg-cover
        `}
        style={{
          backgroundImage: `${
            state.personal_detail.profile ? `url(${state.personal_detail.profile})` : ''
          }`,
        }}
        htmlFor="photo"
      >
        <svg
          className={`${isHover ? 'fill-[#1a91f0]' : 'fill-[#bec4d5]'} ${
            state.personal_detail.profile ? 'hidden' : 'block'
          }`}
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7,35 L33,35 L33,30 L24.9627594,26.8044586 C24.5698041,26.6156354 24.3340309,26.2379889 24.3340309,25.8225778 L24.3340309,24.6518737 C24.3340309,24.3875212 24.412622,24.1231687 24.6090996,23.9343454 C25.9058522,22.5370535 26.770354,20.4599979 27.0061272,19.8557636 C27.0454227,19.7424697 27.1240138,19.6291757 27.2026048,19.5536464 C27.438378,19.3648232 27.8313333,18.8738828 28.1064021,17.7031787 C28.3421753,16.5702393 27.9099244,15.9282403 27.6348557,15.6261232 C27.4776736,15.4750646 27.3990825,15.2862413 27.3990825,15.0974181 L27.3990825,10.2257787 C26.8882406,7.43119483 25.1592371,6.1094322 23.4302337,5.50519785 C21.5833436,4.82543421 18.2825188,4.82543421 16.3963333,5.5429625 C14.7459209,6.18496149 13.056213,7.46895948 12.5846666,10.2257787 L12.5846666,15.0974181 C12.5846666,15.2862413 12.5060755,15.4750646 12.3488934,15.6261232 C12.0738246,15.9282403 11.6415738,16.5702393 11.877347,17.7031787 C12.1131202,18.8738828 12.545371,19.3648232 12.7811442,19.5536464 C12.8597353,19.6291757 12.9383264,19.7424697 12.9776219,19.8557636 C13.2133951,20.4977626 14.0778968,22.4992889 15.3353539,23.8965808 C15.5318315,24.1231687 15.6497181,24.4252858 15.6497181,24.727403 L15.6497181,25.7470485 C15.6497181,26.2379889 15.3746494,26.6534 14.903103,26.8799879 L7,30 L7,35 Z"></path>
        </svg>
      </label>

      <div>
        <label
          className={`${state.personal_detail.profile ? 'hidden' : ''} flex text-sm ${
            isHover ? 'text-[#10529a]' : 'text-[#1a91f0]'
          }  whitespace-nowrap cursor-pointer`}
          htmlFor="photo"
        >
          Upload photo
        </label>
        <div
          className={`${
            state.personal_detail.profile ? '' : 'hidden'
          } flex text-sm text-[#bec4d5] fill-[#bec4d5] items-center hover:text-[#fb4458] hover:fill-[#fb4458]`}
          onClick={() =>
            update_personal_detail_data({
              key: 'profile',
              value: '',
            })
          }
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 6h3v2H3V6h3V3c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1v3zm-9 4h10v8H5v-8zm2 6h6v-4H7v4zm5-10V4H8v2h4z"></path>
          </svg>
          Delete photo
        </div>
      </div>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/png, image/jpeg"
        className="opacity-0 hidden"
        onChange={(e) =>
          update_personal_detail_data({
            key: 'profile',
            value: e?.target.files?.[0] ? URL.createObjectURL(e?.target.files?.[0]) : '',
          })
        }
      />
    </section>
  );
}

export default InputFile;
