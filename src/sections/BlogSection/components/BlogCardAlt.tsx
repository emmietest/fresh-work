export type BlogCardAltProps = {
  postUrl: string;
  day: string;
  month: string;
  imageUrl: string;
  imageAlt: string;
  categoryUrl: string;
  category: string;
  title: string;
  readMoreText: string;
};

export const BlogCardAlt = (props: BlogCardAltProps) => {
  return (
    <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[417px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="box-border caret-transparent inline-block outline-[3px] break-words w-full px-[15px]">
          <div className="box-border caret-transparent outline-[3px] break-words">
            <div className="relative box-border caret-transparent outline-[3px] break-words overflow-hidden mb-[35px]">
              <div className="absolute box-border caret-transparent outline-[3px] break-words z-[3] left-[35px] top-[27px]">
                <a
                  href={props.postUrl}
                  className="text-white text-[13px] font-semibold items-center bg-green-600 box-border caret-transparent flex flex-col h-[75px] justify-center leading-[18px] outline-[3px] break-words uppercase w-[62px] rounded-[30px]"
                >
                  <b className="text-[28px] box-border caret-transparent block leading-7 min-h-[auto] min-w-[auto] outline-[3px] break-words">
                    {props.day}
                  </b>
                  {props.month}
                </a>
              </div>
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="aspect-[auto_820_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-[820px] rounded-[30px]"
              />
            </div>
            <div className="box-border caret-transparent outline-[3px] break-words px-[30px]">
              <div className="box-border caret-transparent outline-[3px] break-words">
                <div className="box-border caret-transparent outline-[3px] break-words mb-2">
                  <a
                    href={props.categoryUrl}
                    className="text-violet-700 font-semibold box-border caret-transparent inline-block leading-5 outline-[3px] break-words mb-[5px]"
                  >
                    {props.category}
                  </a>
                </div>
                <h3 className="text-black text-xl font-semibold box-border caret-transparent clear-both flow-root tracking-[-1px] outline-[3px] break-words overflow-hidden">
                  <a
                    href={props.postUrl}
                    className="box-border caret-transparent outline-[3px] break-words"
                  >
                    {props.title}
                  </a>
                </h3>
              </div>
              <div className="box-border caret-transparent outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-slate-600 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-slate-600 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins">
                <div className="box-border caret-transparent outline-[3px] break-words mt-[30px]">
                  <a
                    href={props.postUrl}
                    className="text-black font-semibold items-center box-border caret-transparent inline-flex leading-[26px] outline-[3px] break-words"
                  >
                    {props.readMoreText}
                    <i className="font-extrabold box-border caret-transparent block leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] break-words -rotate-45 align-middle ml-2.5 font-printec_icon before:accent-auto before:box-border before:caret-transparent before:text-black before:text-sm before:not-italic before:normal-nums before:font-extrabold before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-printec_icon"></i>
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
