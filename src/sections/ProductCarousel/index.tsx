import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSimple } from "@/components/ProductCardSimple";

export const ProductCarousel = () => {
  return (
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
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                imageAlt="Mug"
                                productUrl="https://demo2.pavothemes.com/printec/shop/mug/"
                                title="Mug"
                                priceType="range"
                                price=""
                                minPrice="14.95"
                                maxPrice="119.95"
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel="Price range: $14.95 through $119.95"
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7274"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                imageAlt="Printed Baseball Cap"
                                productUrl="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                title="Printed Baseball Cap"
                                priceType="default"
                                price="12.00"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=112"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                imageAlt="Metallic Business Cards"
                                productUrl="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                title="Metallic Business Cards"
                                priceType="default"
                                price="7.25"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="/printec/home-7/?add-to-cart=126"
                                actionText="Add to cart"
                                actionAriaLabel="Add to cart: “Metallic Business Cards”"
                                actionDescription=""
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                imageAlt="Single-Color Paper Bags"
                                productUrl="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                title="Single-Color Paper Bags"
                                priceType="default"
                                price="15.50"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="/printec/home-7/?add-to-cart=47"
                                actionText="Add to cart"
                                actionAriaLabel="Add to cart: “Single-Color Paper Bags”"
                                actionDescription=""
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                imageAlt="Flyer"
                                productUrl="https://demo2.pavothemes.com/printec/shop/flyer/"
                                title="Flyer"
                                priceType="range"
                                price=""
                                minPrice="19.95"
                                maxPrice="49.95"
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel="Price range: $19.95 through $49.95"
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7239"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_14-600x600.jpg"
                                imageAlt="Notebook mockup"
                                href="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                title="Notebook mockup"
                                priceType="sale"
                                price="13.06"
                                minPrice=""
                                maxPrice=""
                                originalPrice="16.18"
                                salePrice="13.06"
                                discountText="19% OFF"
                                containerClassName=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                imageAlt="Mug"
                                href="https://demo2.pavothemes.com/printec/shop/mug/"
                                title="Mug"
                                priceType="range"
                                price=""
                                minPrice="14.95"
                                maxPrice="119.95"
                                originalPrice=""
                                salePrice=""
                                discountText=""
                                containerClassName=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                imageAlt="Printed Baseball Cap"
                                href="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                title="Printed Baseball Cap"
                                priceType="fixed"
                                price="12.00"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                salePrice=""
                                discountText=""
                                containerClassName=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                imageAlt="Metallic Business Cards"
                                href="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                title="Metallic Business Cards"
                                priceType="default"
                                price="7.25"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                salePrice=""
                                discountText=""
                                containerClassName="before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins"
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                imageAlt="Single-Color Paper Bags"
                                href="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                title="Single-Color Paper Bags"
                                priceType="default"
                                price="15.50"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                salePrice=""
                                discountText=""
                                containerClassName="before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins"
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCardSimple
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                imageAlt="Flyer"
                                href="https://demo2.pavothemes.com/printec/shop/flyer/"
                                title="Flyer"
                                priceType="range"
                                price=""
                                minPrice="19.95"
                                maxPrice="49.95"
                                originalPrice=""
                                salePrice=""
                                discountText=""
                                containerClassName="before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins"
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_14-600x600.jpg"
                                imageAlt="Notebook mockup"
                                productUrl="https://demo2.pavothemes.com/printec/shop/notebook-mockup/"
                                title="Notebook mockup"
                                priceType="sale"
                                price=""
                                minPrice=""
                                maxPrice=""
                                originalPrice="16.18"
                                currentPrice="13.06"
                                priceAriaLabel=""
                                badgeText="19% OFF"
                                actionUrl="/printec/home-7/?add-to-cart=76"
                                actionText="Add to cart"
                                actionAriaLabel="Add to cart: “Notebook mockup”"
                                actionDescription=""
                                containerVariant="before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins"
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/mug.png"
                                imageAlt="Mug"
                                productUrl="https://demo2.pavothemes.com/printec/shop/mug/"
                                title="Mug"
                                priceType="range"
                                price=""
                                minPrice="14.95"
                                maxPrice="119.95"
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel="Price range: $14.95 through $119.95"
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7274"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant="before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-slate-600 before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-none before:md:outline-[3px] before:md:break-words before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-center before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-poppins"
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_32-600x600.jpg"
                                imageAlt="Printed Baseball Cap"
                                productUrl="https://demo2.pavothemes.com/printec/shop/printed-baseball-cap/"
                                title="Printed Baseball Cap"
                                priceType="default"
                                price="12.00"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=112"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_39-600x600.jpg"
                                imageAlt="Metallic Business Cards"
                                productUrl="https://demo2.pavothemes.com/printec/shop/metallic-business-cards/"
                                title="Metallic Business Cards"
                                priceType="default"
                                price="7.25"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="/printec/home-7/?add-to-cart=126"
                                actionText="Add to cart"
                                actionAriaLabel="Add to cart: “Metallic Business Cards”"
                                actionDescription=""
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/product_2-600x600.jpg"
                                imageAlt="Single-Color Paper Bags"
                                productUrl="https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/"
                                title="Single-Color Paper Bags"
                                priceType="default"
                                price="15.50"
                                minPrice=""
                                maxPrice=""
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel=""
                                badgeText=""
                                actionUrl="/printec/home-7/?add-to-cart=47"
                                actionText="Add to cart"
                                actionAriaLabel="Add to cart: “Single-Color Paper Bags”"
                                actionDescription=""
                                containerVariant=""
                              />
                            </div>
                          </div>
                          <div className="box-content caret-black float-none h-auto min-h-0 outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-full md:min-h-px md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[250px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <ProductCard
                                imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/flyer-600x600.png"
                                imageAlt="Flyer"
                                productUrl="https://demo2.pavothemes.com/printec/shop/flyer/"
                                title="Flyer"
                                priceType="range"
                                price=""
                                minPrice="19.95"
                                maxPrice="49.95"
                                originalPrice=""
                                currentPrice=""
                                priceAriaLabel="Price range: $19.95 through $49.95"
                                badgeText=""
                                actionUrl="https://demo2.pavothemes.com/printec/designer/?dp_mode=designer&product_id=7239"
                                actionText="Personalize"
                                actionAriaLabel=""
                                actionDescription="This product has multiple variants. The options may be chosen on the product page"
                                containerVariant=""
                              />
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
  );
};
