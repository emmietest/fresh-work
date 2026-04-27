export const CartDrawer = () => {
  return (
    <div className="fixed bg-slate-100 box-border caret-transparent flex flex-col outline-[3px] break-words overflow-x-hidden overflow-y-auto translate-x-[300px] w-[300px] z-[999999999] right-0 inset-y-0 md:translate-x-[340px] md:w-[340px]">
      <div className="items-center border-b-gray-200 border-l-slate-600 border-r-slate-600 border-t-slate-600 box-border caret-transparent flex shrink-0 justify-end min-h-[auto] min-w-[auto] outline-[3px] break-words p-[15px] border-b">
        <span className="text-black text-lg font-medium box-border caret-transparent block grow leading-[30.8571px] min-h-[auto] min-w-[auto] outline-[3px] break-words">
          Shopping cart
        </span>
        <a
          href="#"
          className="relative text-black text-[13px] font-medium box-border caret-transparent block tracking-[0.3px] leading-[22.2857px] min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase pr-[18px] before:accent-auto before:bg-black before:caret-transparent before:text-black before:block before:text-[13px] before:not-italic before:normal-nums before:font-medium before:h-0.5 before:tracking-[0.3px] before:leading-[22.2857px] before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:uppercase before:rotate-45 before:visible before:w-3 before:-mt-px before:border-separate before:right-0 before:top-2/4 before:font-poppins after:accent-auto after:bg-black after:caret-transparent after:text-black after:block after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.3px] after:leading-[22.2857px] after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:uppercase after:-rotate-45 after:visible after:w-3 after:-mt-px after:border-separate after:right-0 after:top-2/4 after:font-poppins"
        >
          close
        </a>
      </div>
      <div className="relative box-border caret-transparent flex grow min-h-[auto] min-w-[auto] outline-[3px] break-words">
        <div className="box-border caret-transparent flex flex-col grow min-h-[auto] min-w-[auto] outline-[3px] break-words">
          <p className="text-lg box-border caret-transparent leading-[30.8571px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center m-[25.4835px]">
            No products in the cart.
          </p>
        </div>
      </div>
    </div>
  );
};
