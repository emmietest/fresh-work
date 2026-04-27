export type BlogCardProps = {
  postUrl: string;
  dateDay: string;
  dateMonth: string;
  imageUrl: string;
  imageAlt: string;
  categoryLabel: string;
  categoryUrl: string;
  title: string;
  readMoreText: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[417px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="box-content caret-black block outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black outline-0 mb-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-[35px] md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black outline-0 z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[3] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[35px] md:top-[27px]">
                <a
                  href={props.postUrl}
                  className="text-black text-base font-normal [align-items:normal] bg-transparent box-content caret-black inline flex-row h-auto justify-normal leading-[normal] outline-0 normal-case w-auto rounded-none md:text-white md:text-[13px] md:font-semibold md:items-center md:aspect-auto md:bg-green-600 md:box-border md:caret-transparent md:flex md:flex-col md:h-[75px] md:justify-center md:leading-[18px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:w-[62px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
                >
                  <b className="md:text-[28px] md:aspect-auto md:box-border md:caret-transparent md:block md:leading-7 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    {props.dateDay}
                  </b>
                  {props.dateMonth}
                </a>
              </div>
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="box-content caret-black max-w-none outline-0 align-middle w-auto rounded-none md:aspect-[auto_820_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[820px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
              />
            </div>
            <div className="box-content caret-black outline-0 px-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-[30px] md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black outline-0 mb-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-2 md:scroll-m-0 md:scroll-p-[auto]">
                  <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                    Categories
                  </span>
                  <a
                    href={props.categoryUrl}
                    className="text-black font-normal box-content caret-black inline leading-[normal] outline-0 mb-0 md:text-violet-700 md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:inline-block md:leading-5 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[5px] md:scroll-m-0 md:scroll-p-[auto]"
                  >
                    {props.categoryLabel}
                  </a>
                </div>
                <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] outline-0 md:text-xl md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <a
                    href={props.postUrl}
                    className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  >
                    {props.title}
                  </a>
                </h3>
              </div>
              <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:table before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-slate-600 after:md:table after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-start after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:normal-case after:md:underline-offset-auto after:md:visible after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-poppins">
                <div className="box-content caret-black outline-0 mt-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-[30px] md:scroll-m-0 md:scroll-p-[auto]">
                  <a
                    href={props.postUrl}
                    className="text-black font-normal [align-items:normal] box-content caret-black inline leading-[normal] outline-0 md:font-semibold md:items-center md:aspect-auto md:box-border md:caret-transparent md:inline-flex md:leading-[26px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  >
                    {props.readMoreText}
                    <i className="md:font-extrabold md:aspect-auto md:box-border md:caret-transparent md:block md:leading-[14px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:-rotate-45 md:align-middle md:[mask-position:0%] md:bg-left-top md:ml-2.5 md:scroll-m-0 md:scroll-p-[auto] md:font-printec_icon before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-black before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-extrabold before:md:tracking-[normal] before:md:leading-[14px] before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-printec_icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
