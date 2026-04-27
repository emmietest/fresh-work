import { SectionHeader } from "@/components/SectionHeader";
import { StepCard } from "@/sections/ReasonsSection/components/StepCard";
import { PromoBanner } from "@/sections/ReasonsSection/components/PromoBanner";

export const ReasonsSection = () => {
  return (
    <section className="relative box-border caret-transparent ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] outline-[3px] break-words w-screen px-[15px] left-0 md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:px-[30px]">
      <div className="relative box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
            <SectionHeader
              rootTag="section"
              rootClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full"
              containerClassName="relative box-border caret-transparent max-w-[570px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-[570px]"
              innerClassName="box-border caret-transparent outline-[3px] break-words"
              eyebrowText="Let’s get printing"
              eyebrowWrapperClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full"
              eyebrowInnerClassName="box-border caret-transparent outline-[3px] break-words mb-[25px]"
              showEyebrow
              titleLine1="Reasons to get"
              titleHighlight="printing started"
              titleLine3="with us"
              showDescription
              description="Our dedicated staff makes it easy for you to create a unique design that will impress\nyour clients and make you stand out from the crowd."
              descriptionWrapperClassName="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full font-poppins"
            />
            <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-[60px] md:mb-[145px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[1410px] outline-[3px] break-words mx-auto md:flex-nowrap">
                <StepCard
                  title="Connect your store"
                  description="Connect your store to Printec, add your products, and set your own retail prices"
                  iconSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/icon-1.svg"
                  iconAlt="Icon"
                  outerClassName="mb-[30px] md:mb-0"
                  topRowClassName="mt-[5px]"
                  contentWrapperClassName="md:gap-x-[35px] md:gap-y-[35px]"
                  iconBadgeClassName="text-[64px] leading-[64px]"
                  iconClassName="h-16 w-16"
                  descriptionClassName="max-w-[253px] w-[253px]"
                  showDecor={true}
                  decorSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/decor.png"
                  decorAlt=""
                />
                <StepCard
                  title="Customer places their order"
                  description="A customer buys from your store, we charge for fulfillment, and you keep the profit"
                  iconSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/icon-2.svg"
                  iconAlt="Icon"
                  outerClassName="mb-[30px] md:mb-0"
                  topRowClassName=""
                  contentWrapperClassName="md:gap-x-[39px] md:gap-y-[39px]"
                  iconBadgeClassName="text-[64px] leading-[64px]"
                  iconClassName="h-16 w-16"
                  descriptionClassName="max-w-[253px] w-[253px]"
                  showDecor={true}
                  decorSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/decor.png"
                  decorAlt=""
                />
                <StepCard
                  title="Printes fulfills the order"
                  description="We take care of your order from A to Z, and control the whole fulfillment process"
                  iconSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/icon-3.svg"
                  iconAlt="Icon"
                  outerClassName="mb-[30px] md:mb-0"
                  topRowClassName="mt-[5px]"
                  contentWrapperClassName="md:gap-x-10 md:gap-y-10"
                  iconBadgeClassName="text-[58px] leading-[58px]"
                  iconClassName="h-[58px] w-[58px]"
                  descriptionClassName="max-w-60 w-60"
                  showDecor={true}
                  decorSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/decor.png"
                  decorAlt=""
                />
                <StepCard
                  title="Order ships to your customer"
                  description="Your customer receives their order with your brand attached to it"
                  iconSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/icon-4.svg"
                  iconAlt="Icon"
                  outerClassName=""
                  topRowClassName="mt-0 md:mt-2.5"
                  contentWrapperClassName="md:gap-x-8 md:gap-y-8"
                  iconBadgeClassName="text-6xl leading-[60px]"
                  iconClassName="h-[60px] w-[60px]"
                  descriptionClassName="max-w-[215px] w-[215px]"
                  showDecor={false}
                  decorSrc=""
                  decorAlt=""
                />
              </div>
            </section>
            <PromoBanner />
            <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-[120px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[1410px] outline-[3px] break-words mx-auto md:flex-nowrap">
                <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                    <SectionHeader
                      simpleTitleOnly
                      titleHighlight="Top Selling"
                      titleLine3="Items"
                    />
                    <div className="relative box-border caret-transparent max-w-[473px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-[473px] font-poppins">
                      <div className="box-border caret-transparent outline-[3px] break-words mb-[30px] md:mb-[70px]">
                        <div className="box-border caret-transparent outline-[3px] break-words">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                      <div className="box-border caret-transparent outline-[3px] break-words">
                        <div className="box-border caret-transparent outline-[3px] break-words">
                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                            <ul className="relative box-border caret-transparent clear-both flex-wrap ml-[-15px] mr-[-15px] outline-[3px] break-words pl-0">
                              <div className="static box-content caret-black outline-0 m-0 p-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:mb-[-115px] md:ml-[-15px] md:mr-[-15px] md:mt-[-15px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[15px] md:pb-[115px] md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="static box-content caret-black outline-0 transform-none w-auto mx-0 left-auto top-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-1500px] md:w-[4250px] md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0 before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:table before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-slate-600 after:md:table after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-start after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:normal-case after:md:underline-offset-auto after:md:visible after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-poppins">
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                                alt="Mug"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/mug/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/mug/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Mug
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    14.95
                                                  </bdi>
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  –
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    119.95
                                                  </bdi>
                                                </span>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Price range: $14.95 through
                                                  $119.95
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7274"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                                alt="Printed Baseball Cap"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Printed Baseball Cap
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    12.00
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=112"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                                alt="Metallic Business Cards"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Metallic Business Cards
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    7.25
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="/printec/home-7/?add-to-cart=126"
                                                aria-label="Add to cart: “Metallic Business Cards”"
                                                role="button"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Add to cart
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                                alt="Single-Color Paper Bags"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Single-Color Paper Bags
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    15.50
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="/printec/home-7/?add-to-cart=47"
                                                aria-label="Add to cart: “Single-Color Paper Bags”"
                                                role="button"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Add to cart
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                                alt="Flyer"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Flyer
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    19.95
                                                  </bdi>
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  –
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    49.95
                                                  </bdi>
                                                </span>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Price range: $19.95 through
                                                  $49.95
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7239"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px]">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_14-600x600.jpg"
                                                alt="Notebook mockup"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <span className="absolute text-white text-xs font-semibold bg-red-500 box-border caret-transparent block tracking-[2px] leading-5 outline-[3px] break-words uppercase z-[3] px-[15px] py-1 rounded-bl rounded-br rounded-tl rounded-tr left-[25px] top-[25px]">
                                              19% OFF
                                            </span>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Notebook mockup
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <del className="text-neutral-400 text-sm box-border caret-transparent leading-[22.4px] outline-[3px] break-words line-through w-full">
                                                  <span className="box-border caret-transparent outline-[3px] break-words">
                                                    <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                      <span className="box-border caret-transparent outline-[3px] break-words">
                                                        $
                                                      </span>
                                                      16.18
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins className="text-red-500 box-border caret-transparent -order-1 outline-[3px] break-words mr-1.5">
                                                  <span className="box-border caret-transparent outline-[3px] break-words">
                                                    <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                      <span className="box-border caret-transparent outline-[3px] break-words">
                                                        $
                                                      </span>
                                                      13.06
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px]">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                                alt="Mug"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/mug/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/mug/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Mug
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    14.95
                                                  </bdi>
                                                </span>
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  –
                                                </span>
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    119.95
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px]">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                                alt="Printed Baseball Cap"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Printed Baseball Cap
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    12.00
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                                alt="Metallic Business Cards"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Metallic Business Cards
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    7.25
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                                alt="Single-Color Paper Bags"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Single-Color Paper Bags
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    15.50
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                                        <div className="relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins">
                                          <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
                                            <div className="box-border caret-transparent outline-[3px] break-words">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                                alt="Flyer"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
                                              />
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                              className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
                                            ></a>
                                          </div>
                                          <div className="relative box-border caret-transparent outline-[3px] break-words">
                                            <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                                className="box-border caret-transparent outline-[3px] break-words"
                                              >
                                                Flyer
                                              </a>
                                            </h3>
                                            <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
                                              <span className="box-border caret-transparent outline-[3px] break-words">
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    19.95
                                                  </bdi>
                                                </span>
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  –
                                                </span>
                                                <span className="box-border caret-transparent outline-[3px] break-words">
                                                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                                                    <span className="box-border caret-transparent outline-[3px] break-words">
                                                      $
                                                    </span>
                                                    49.95
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_14-600x600.jpg"
                                                alt="Notebook mockup"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <span className="static text-black text-base font-normal bg-transparent box-content caret-black inline tracking-[normal] leading-[normal] outline-0 normal-case z-auto p-0 rounded-none left-auto top-auto md:absolute md:text-white md:text-xs md:font-semibold md:aspect-auto md:bg-red-500 md:box-border md:caret-transparent md:block md:tracking-[2px] md:leading-5 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:z-[3] md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:left-[25px] md:top-[25px]">
                                              19% OFF
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Notebook mockup
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <del className="md:text-neutral-400 md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:line-through md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                        $
                                                      </span>
                                                      16.18
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Original price was: $16.18.
                                                </span>
                                                <ins className="md:text-red-500 md:aspect-auto md:box-border md:caret-transparent md:-order-1 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1.5 md:scroll-m-0 md:scroll-p-[auto]">
                                                  <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                        $
                                                      </span>
                                                      13.06
                                                    </bdi>
                                                  </span>
                                                </ins>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Current price is: $13.06.
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="/printec/home-7/?add-to-cart=76"
                                                aria-label="Add to cart: “Notebook mockup”"
                                                role="button"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Add to cart
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                                alt="Mug"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/mug/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/mug/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Mug
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    14.95
                                                  </bdi>
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  –
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    119.95
                                                  </bdi>
                                                </span>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Price range: $14.95 through
                                                  $119.95
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7274"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                                alt="Printed Baseball Cap"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Printed Baseball Cap
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    12.00
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=112"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                                alt="Metallic Business Cards"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Metallic Business Cards
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    7.25
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="/printec/home-7/?add-to-cart=126"
                                                aria-label="Add to cart: “Metallic Business Cards”"
                                                role="button"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Add to cart
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                                alt="Single-Color Paper Bags"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Single-Color Paper Bags
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    15.50
                                                  </bdi>
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="/printec/home-7/?add-to-cart=47"
                                                aria-label="Add to cart: “Single-Color Paper Bags”"
                                                role="button"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Add to cart
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                  <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                          <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>
                                          <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
                                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <img
                                                src="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                                alt="Flyer"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                                              />
                                            </div>
                                            <div className="static box-content caret-black opacity-100 outline-0 z-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[8] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-5 md:top-[30px]">
                                              <div className="box-content caret-black block flex-row outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <button
                                                  aria-label="Add to wishlist"
                                                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"
                                                >
                                                  Add to wishlist
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Quick view
                                                </button>
                                                <button className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 outline-0 w-auto rounded-none md:relative md:appearance-none md:text-[0px] md:font-semibold md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_0px_0px_15px_0px] md:caret-transparent md:flex md:h-10 md:justify-center md:leading-10 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:m-[5px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:block before:md:text-[17px] before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[17px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:align-middle before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon">
                                                  Compare
                                                </button>
                                              </div>
                                            </div>
                                            <a
                                              href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                              className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                                            ></a>
                                          </div>
                                          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                                className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                              >
                                                Flyer
                                              </a>
                                            </h3>
                                            <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                              <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    19.95
                                                  </bdi>
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  –
                                                </span>
                                                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                      $
                                                    </span>
                                                    49.95
                                                  </bdi>
                                                </span>
                                                <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                  Price range: $19.95 through
                                                  $49.95
                                                </span>
                                              </span>
                                            </span>
                                            <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
                                              <a
                                                href="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7239"
                                                className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                                              >
                                                Personalize
                                              </a>
                                              <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                                                This product has multiple
                                                variants. The options may be
                                                chosen on the product page{" "}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
