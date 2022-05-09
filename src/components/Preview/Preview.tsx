import { CVData } from '../../hooks/cvDataHook';

interface Props {
  cvData: CVData;
}

const Preview: React.FC<Props> = (props) => {
  return (
    // <div className="w-1/2 p-10 bg-slate-500 fixed right-0 top-0 h-screen flex justify-center flex-col items-center">
    <div className="w-1/2 p-10 bg-slate-500 fixed right-0 top-0 h-screen flex justify-center flex-col items-center">
      <div className="flex fill-[#ffffff] text-[#ffffff] items-center mb-2">
        {/* <div className="flex fill-[#ffffff] text-[#ffffff] items-center mb-2"> */}
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

      <section className="bg-white w-[21cm] h-[29.7cm] rounded-md p-5 scale-[calc(80vh/29.7cm)]">
        <h1 className="text-left text-xl">{`${props.cvData.first_name} ${props.cvData.last_name}`}</h1>
        <p className="text-left text-xs mb-3">{props.cvData.job_title}</p>
        <div className="flex items-center">
          <i className="fa-solid fa-user mr-1"></i>
          <h2 className="text-left text-base">Profile</h2>
        </div>
      </section>
      <div className="text-white fill-white flex items-center justify-between mt-3 w-[28rem]">
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
          <button className="py-[13px] px-6 bg-[#1a91f0] rounded-md mr-2">
            <span>Download PDF</span>
          </button>
          <div>
            <button className="py-[13px] px-6 bg-[#1a91f0] rounded-md">
              <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
