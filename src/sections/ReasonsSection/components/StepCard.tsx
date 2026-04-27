export type StepCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  outerClassName: string;
  topRowClassName: string;
  contentWrapperClassName: string;
  iconBadgeClassName: string;
  iconClassName: string;
  descriptionClassName: string;
  showDecor: boolean;
  decorSrc: string;
  decorAlt: string;
};

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full md:w-3/12">
      <div
        className={`relative content-start box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] outline-[3px] break-words w-full px-[15px] ${props.outerClassName}`}
      >
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
          <div
            className={`box-border caret-transparent outline-[3px] break-words ${props.topRowClassName}`}
          >
            <div
              className={`box-border caret-transparent gap-x-5 flex flex-col outline-[3px] break-words gap-y-5 text-center ${props.contentWrapperClassName}`}
            >
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] break-words">
                <span
                  className={`text-violet-700 box-border caret-transparent inline-block fill-violet-700 outline-[3px] break-words ${props.iconBadgeClassName}`}
                >
                  <img
                    src={props.iconSrc}
                    alt={props.iconAlt}
                    className={`relative box-border caret-transparent outline-[3px] align-baseline ${props.iconClassName}`}
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                <h3 className="text-black text-xl font-medium box-border caret-transparent clear-both tracking-[-0.2px] leading-7 outline-[3px] break-words mb-[15px] font-poppins">
                  <span className="box-border caret-transparent outline-[3px] break-words">
                    {props.title}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-center font-poppins ${props.descriptionClassName}`}
        >
          <div className="box-border caret-transparent outline-[3px] break-words">
            <div className="box-border caret-transparent outline-[3px] break-words">
              {props.description}
            </div>
          </div>
        </div>
        {props.showDecor && (
          <div className="absolute box-border caret-transparent hidden outline-[3px] break-words text-center w-full z-0 left-2/4 top-5 md:block">
            <div className="box-border caret-transparent outline-[3px] break-words">
              <img
                src={props.decorSrc}
                alt={props.decorAlt}
                className="aspect-[auto_90_/_26] box-border caret-transparent inline-block max-w-full outline-[3px] break-words w-[90px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
