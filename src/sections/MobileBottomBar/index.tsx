import { BottomBarItem } from "@/sections/MobileBottomBar/components/BottomBarItem";

export const MobileBottomBar = () => {
  return (
    <section className="fixed bg-white box-border caret-transparent block outline-[3px] break-words w-full z-[997] border-gray-200 border-x-0 border-b border-t border-solid bottom-0 md:hidden md:border-[3px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] outline-[3px] break-words mx-auto md:flex-nowrap md:max-w-[1410px]">
        <BottomBarItem
          href="https://demo2.pavothemes.com/printec/shop/"
          label="Shop"
          ariaLabel="Shop"
          iconClassName="relative box-border caret-transparent block h-5 outline-[3px] break-words align-middle w-5 font-printec_icon before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-11.25px] before:visible before:border-separate before:left-2/4 before:font-printec_icon before:md:transform-none"
          outerClassName="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full border-gray-200 px-[5px] py-2.5 border-l border-r border-solid md:min-h-0 md:min-w-0"
          innerClassName="box-border caret-transparent outline-[3px] break-words"
          linkClassName="text-black text-xl box-border caret-transparent inline-block leading-5 outline-[3px] break-words"
          isSearchVariant="false"
        />
        <BottomBarItem
          href="https://demo2.pavothemes.com/printec/my-account/"
          label="Account"
          ariaLabel="Account"
          iconClassName="relative box-border caret-transparent block h-[22px] outline-[3px] break-words align-middle w-[22px] font-printec_icon before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-[22px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-11.0078px] before:visible before:border-separate before:left-2/4 before:font-printec_icon before:md:transform-none"
          outerClassName="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full border-gray-200 px-[5px] py-2.5 border-r border-solid md:min-h-0 md:min-w-0"
          innerClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:min-h-0 md:min-w-0"
          linkClassName="text-black text-[22px] box-border caret-transparent inline-block leading-[22px] outline-[3px] break-words"
          isSearchVariant="false"
        />
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-3/12 md:min-w-0">
          <BottomBarItem
            href="#"
            label="Search"
            ariaLabel=""
            iconClassName="text-xl box-border caret-transparent inline-block leading-5 outline-[3px] break-words text-nowrap align-middle mr-[5px] mb-[5px] font-printec_icon before:accent-auto before:box-border before:caret-transparent before:text-black before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-printec_icon"
            outerClassName="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full border-gray-200 px-[5px] py-2.5 border-r border-solid md:min-h-0 md:min-w-0"
            innerClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full z-[99] md:min-h-0 md:min-w-0"
            linkClassName="text-black items-center box-border caret-transparent block outline-[3px] break-words text-center text-nowrap"
            isSearchVariant="true"
          />
        </div>
        <BottomBarItem
          href="https://demo2.pavothemes.com/printec/wishlist/"
          label="Wishlist"
          ariaLabel="Wishlist"
          iconClassName="relative box-border caret-transparent block h-5 outline-[3px] break-words align-middle w-5 font-printec_icon before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:-translate-x-2.5 before:visible before:border-separate before:left-2/4 before:font-printec_icon before:md:transform-none"
          outerClassName="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full border-gray-200 px-[5px] py-2.5 border-r border-solid md:min-h-0 md:min-w-0"
          innerClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:min-h-0 md:min-w-0"
          linkClassName="text-black text-xl box-border caret-transparent inline-block leading-5 outline-[3px] break-words"
          isSearchVariant="false"
        />
      </div>
    </section>
  );
};
