export type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  productUrl: string;
  title: string;
  priceType: string;
  price: string;
  minPrice: string;
  maxPrice: string;
  originalPrice: string;
  currentPrice: string;
  priceAriaLabel: string;
  badgeText: string;
  actionUrl: string;
  actionText: string;
  actionAriaLabel: string;
  actionDescription: string;
  containerVariant: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <li className="box-content caret-black list-item basis-auto shrink list-disc max-w-none outline-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:basis-full md:shrink-0 md:list-none md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
      <div
        className={`static box-content caret-black outline-0 text-start rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] ${props.containerVariant}`}
      >
        <div className="static bg-transparent shadow-none box-content caret-black opacity-100 outline-0 transform-none visible rounded-none inset-auto md:absolute md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.07)_0px_1px_15px_0px] md:box-border md:caret-transparent md:left-[-15px] md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:right-[-15px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-15px] md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[0.98] md:bottom-0"></div>

        <div className="static bg-transparent box-content caret-black outline-0 mb-0 rounded-none md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]">
          <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              sizes="(max-width: 600px) 100vw, 600px"
              className="box-content caret-black max-w-none outline-0 align-middle w-auto mx-0 md:aspect-[auto_600_/_600] md:box-border md:caret-transparent md:max-w-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>

          {props.badgeText ? (
            <span className="static text-black text-base font-normal bg-transparent box-content caret-black inline tracking-[normal] leading-[normal] outline-0 normal-case z-auto p-0 rounded-none left-auto top-auto md:absolute md:text-white md:text-xs md:font-semibold md:aspect-auto md:bg-red-500 md:box-border md:caret-transparent md:block md:tracking-[2px] md:leading-5 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:z-[3] md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:left-[25px] md:top-[25px]">
              {props.badgeText}
            </span>
          ) : null}

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
            href={props.productUrl}
            className="static text-black box-content caret-black inline h-auto outline-0 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-full md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
          ></a>
        </div>

        <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <h3 className="text-black text-[18.72px] font-bold box-content caret-black clear-none block tracking-[normal] max-h-none outline-0 mb-0 md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:clear-both md:flow-root md:tracking-[-1px] md:max-h-12 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href={props.productUrl}
              className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            >
              {props.title}
            </a>
          </h3>

          <span className="text-black text-base font-normal box-content caret-black outline-0 md:text-lg md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {props.priceType === "range" ? (
                <>
                  <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        $
                      </span>
                      {props.minPrice}
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
                      {props.maxPrice}
                    </bdi>
                  </span>
                  <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                    {props.priceAriaLabel}
                  </span>
                </>
              ) : props.priceType === "sale" ? (
                <>
                  <del className="md:text-neutral-400 md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:line-through md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          $
                        </span>
                        {props.originalPrice}
                      </bdi>
                    </span>
                  </del>
                  <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                    {props.originalPrice
                      ? `Original price was: $${props.originalPrice}.`
                      : ""}
                  </span>
                  <ins className="md:text-red-500 md:aspect-auto md:box-border md:caret-transparent md:-order-1 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1.5 md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          $
                        </span>
                        {props.currentPrice}
                      </bdi>
                    </span>
                  </ins>
                  <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-180000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
                    {props.currentPrice
                      ? `Current price is: $${props.currentPrice}.`
                      : ""}
                  </span>
                </>
              ) : (
                <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <bdi className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      $
                    </span>
                    {props.price}
                  </bdi>
                </span>
              )}
            </span>
          </span>

          <div className="static box-content caret-black opacity-100 outline-0 visible p-0 top-auto inset-x-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[25px] md:scroll-m-0 md:scroll-p-[auto] md:top-full md:inset-x-0">
            <a
              href={props.actionUrl}
              aria-label={props.actionAriaLabel || undefined}
              role={props.actionAriaLabel ? "button" : undefined}
              className="text-black font-normal bg-transparent box-content caret-black inline leading-[normal] outline-0 p-0 rounded-none md:text-white md:font-semibold md:aspect-auto md:bg-black md:box-border md:caret-transparent md:flow-root md:leading-10 md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-9 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px]"
            >
              {props.actionText}
            </a>
            <span className="static box-content caret-black inline h-auto outline-0 w-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-140000px] md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-px md:scroll-m-0 md:scroll-p-[auto]">
              {props.actionDescription}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
