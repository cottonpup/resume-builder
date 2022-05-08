const Addition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center px-2 py-4 text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
      </svg>
      <p className="text-left">{children}</p>
    </div>
  );
};

export default Addition;
