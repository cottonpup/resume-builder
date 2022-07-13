import { DownloadBtn } from '../../UI/Buttons/DownloadBtn';
import { MeatballsMenuBtn } from '../../UI/Buttons/MeatballsMenuBtn';

interface Props {
  setIsFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
}
export function FullPreviewHeader(props: Props) {
  return (
    <div className="bg-[#0f141e] h-[64px] flex text-white fill-white justify-between items-center px-[32px] z-10">
      <div
        className="flex items-center cursor-pointer bg-[rgba(48,_56,_72,_0)]"
        onClick={() => props.setIsFullPreview(false)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 mr-[2px]"
        >
          <path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
        </svg>
        <div>Back to editor</div>
      </div>
      <div className="flex items-center">
        <DownloadBtn className="py-[8px] px-3 bg-[#1a91f0] text-sm rounded-md mr-2 font-semibold" />
        <MeatballsMenuBtn buttonSize="small" optionsDirection="bottom" />
      </div>
    </div>
  );
}
