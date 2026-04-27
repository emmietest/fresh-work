export type SectionHeaderProps = {
  rootTag?: string;
  rootClassName?: string;
  innerClassName?: string;
  containerClassName?: string;
  eyebrowText?: string;
  eyebrowWrapperClassName?: string;
  eyebrowInnerClassName?: string;
  eyebrowTitleClassName?: string;
  titleClassName?: string;
  titleLine1?: string;
  titleHighlight?: string;
  titleLine3?: string;
  description?: string;
  descriptionClassName?: string;
  descriptionWrapperClassName?: string;
  descriptionInnerClassName?: string;
  highlightClassName?: string;
  showEyebrow?: boolean;
  showDescription?: boolean;
  simpleTitleOnly?: boolean;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const RootTag = (props.rootTag || "div") as keyof JSX.IntrinsicElements;

  const hasTitleLine1 = !!props.titleLine1;
  const hasTitleHighlight = !!props.titleHighlight;
  const hasTitleLine3 = !!props.titleLine3;

  const titleContent = (
    <h2
      className={
        props.titleClassName ||
        "text-black text-[28px] font-medium box-border caret-transparent clear-both tracking-[-0.5px] leading-[34px] outline-[3px] break-words text-center mb-[15.1422px] font-poppins md:text-[45px] md:tracking-[-2px] md:leading-[50px] md:mb-[24.3356px]"
      }
    >
      {hasTitleLine1 && (
        <span className="text-[28px] box-border caret-transparent tracking-[-0.5px] leading-[34px] outline-[3px] break-words md:text-[45px] md:tracking-[-2px] md:leading-[50px]">
          {props.titleLine1}
        </span>
      )}
      {hasTitleHighlight && (
        <span className="text-[28px] box-border caret-transparent tracking-[-0.5px] leading-[34px] outline-[3px] break-words md:text-[45px] md:tracking-[-2px] md:leading-[50px]">
          <span
            className={
              props.highlightClassName ||
              "text-violet-700 text-[28px] box-border caret-transparent tracking-[-0.5px] leading-[34px] outline-[3px] break-words md:text-[45px] md:tracking-[-2px] md:leading-[50px]"
            }
          >
            {props.titleHighlight}
          </span>
        </span>
      )}
      {hasTitleLine3 && (
        <span className="text-[28px] box-border caret-transparent tracking-[-0.5px] leading-[34px] outline-[3px] break-words md:text-[45px] md:tracking-[-2px] md:leading-[50px]">
          {props.titleLine3}
        </span>
      )}
    </h2>
  );

  if (props.simpleTitleOnly) {
    return (
      <RootTag
        className={
          props.rootClassName ||
          "relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full"
        }
      >
        <div
          className={
            props.innerClassName ||
            "box-border caret-transparent outline-[3px] break-words"
          }
        >
          {titleContent}
        </div>
      </RootTag>
    );
  }

  return (
    <RootTag
      className={
        props.rootClassName ||
        "relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full content-start flex flex-wrap justify-center"
      }
    >
      {props.showEyebrow && (
        <div
          className={
            props.eyebrowWrapperClassName ||
            "box-border caret-transparent outline-[3px] break-words relative min-h-[auto] min-w-[auto] text-center w-full"
          }
        >
          <div
            className={
              props.eyebrowInnerClassName ||
              "box-border caret-transparent outline-[3px] break-words mb-[25px]"
            }
          >
            <h2
              className={
                props.eyebrowTitleClassName ||
                "text-violet-700 text-[13px] font-semibold box-border caret-transparent clear-both tracking-[2px] leading-[18px] outline-[3px] break-words uppercase font-poppins"
              }
            >
              {props.eyebrowText}
            </h2>
          </div>
        </div>
      )}

      <div
        className={
          props.containerClassName ||
          "relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full"
        }
      >
        <div
          className={
            props.innerClassName ||
            "box-border caret-transparent outline-[3px] break-words mb-[30px] md:mb-[60px]"
          }
        >
          {titleContent}
        </div>
      </div>

      {props.showDescription && (
        <div
          className={
            props.descriptionWrapperClassName ||
            "box-border caret-transparent outline-[3px] break-words relative min-h-[auto] min-w-[auto] text-center w-full font-poppins"
          }
        >
          <div
            className={
              props.descriptionInnerClassName ||
              "box-border caret-transparent outline-[3px] break-words mb-[30px] md:mb-[87px]"
            }
          >
            <div
              className={
                props.descriptionClassName ||
                "box-border caret-transparent outline-[3px] break-words"
              }
            >
              {props.description}
            </div>
          </div>
        </div>
      )}
    </RootTag>
  );
};
