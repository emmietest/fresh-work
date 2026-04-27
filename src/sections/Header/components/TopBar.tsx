export const TopBar = () => {
  return (
    <section className="relative bg-sky-100 box-border caret-transparent w-full outline-[3px] break-words p-2.5 left-0 md:px-[30px] md:py-[13px]">
      <div className="relative box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
            <div className="relative text-[13px] font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full font-poppins md:text-sm">
              <div className="text-[13px] box-border caret-transparent outline-[3px] break-words md:text-sm">
                <div className="text-[13px] box-border caret-transparent outline-[3px] break-words md:text-sm">
                  Free metro delivery* Sign Up for{" "}
                  <span className="text-violet-700 text-[13px] box-border caret-transparent outline-[3px] break-words md:text-sm">
                    $30
                  </span>
                  off your order!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
