import { DownloadBtn } from '../../UI/Buttons/DownloadBtn';
import { MeatballsMenuBtn } from '../../UI/Buttons/MeatballsMenuBtn';

export function SmallPreviewFooter() {
  return (
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

        <div className="cursor-pointer">Select template</div>
      </div>
      <div className="flex items-center">
        <DownloadBtn className="py-[13px] px-6 bg-[#1a91f0] rounded-md mr-2 font-bold" />
        <MeatballsMenuBtn optionsDirection="top" />
      </div>
    </div>
  );
}
