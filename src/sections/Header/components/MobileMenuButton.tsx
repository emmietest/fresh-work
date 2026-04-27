export const MobileMenuButton = () => {
  return (
    <div className="relative self-center box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words md:hidden md:min-h-0 md:min-w-0">
      <div className="box-border caret-transparent outline-[3px] break-words">
        <div className="box-border caret-transparent flex outline-[3px] break-words">
          <a
            href="#"
            className="text-black text-[15px] items-center box-border caret-transparent flex leading-[25.7143px] min-h-[auto] min-w-[auto] outline-[3px] break-words md:min-h-0 md:min-w-0"
          >
            <span className="text-sm box-border caret-transparent hidden leading-6 order-1 outline-[3px] break-words uppercase top-[-140000px]">
              Menu
            </span>
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] break-words md:min-h-0 md:min-w-0">
              <span className="bg-black box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] break-words w-6 mb-[3px] rounded-[5px] md:min-h-0 md:min-w-0"></span>
              <span className="bg-black box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] break-words w-4 mb-[3px] rounded-[5px] md:min-h-0 md:min-w-0"></span>
              <span className="bg-black box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] break-words w-3 rounded-[5px] md:min-h-0 md:min-w-0"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
