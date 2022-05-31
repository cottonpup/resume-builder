export function FullScreenController() {
  return (
    <div className="bg-black p-[4px] absolute left-2/4 -translate-x-2/4 bottom-[16px] flex items-center text-white fill-white rounded-[18px]">
      <button>
        <svg
          className="rotate-180 opacity-[0.3]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
        </svg>
      </button>
      <div className="text-[12px] mx-[4px]">1 / 1</div>
      <button>
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
      </button>
    </div>
  );
}
