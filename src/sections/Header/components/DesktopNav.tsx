import { MegaMenu } from "@/sections/Header/components/MegaMenu";
import { DropdownMenu } from "@/sections/Header/components/DropdownMenu";

export const DesktopNav = () => {
  return (
    <div className="relative self-center box-border caret-transparent hidden max-w-full min-h-0 min-w-0 outline-[3px] break-words md:block md:min-h-[auto] md:min-w-[auto]">
      <div className="box-border caret-transparent outline-[3px] break-words">
        <div className="box-border caret-transparent outline-[3px] break-words">
          <nav
            aria-label="Primary Navigation"
            className="relative box-border caret-transparent clear-none outline-[3px] break-words w-auto md:clear-both md:w-full before:accent-auto before:box-border before:caret-transparent before:text-slate-600 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-slate-600 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins"
          >
            <div className="box-border caret-transparent hidden outline-[3px] break-words md:block">
              <ul className="box-border caret-transparent clear-both list-none outline-[3px] break-words mx-0 pl-0 md:ml-[-15.4px] md:mr-[-15.4px]">
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="https://demo2.pavothemes.com/printec/"
                    className="relative text-violet-700 font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Home
                    </span>
                  </a>
                  <MegaMenu
                    variant="home"
                    homeItems={[
                      {
                        href: "https://demo2.pavothemes.com/printec",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home1.jpg",
                        imageAlt: "",
                        title: "01. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-2",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home2.jpg",
                        imageAlt: "",
                        title: "02. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-3",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home3.jpg",
                        imageAlt: "",
                        title: "03. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-4",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home4.jpg",
                        imageAlt: "",
                        title: "04. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-5",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home5.jpg",
                        imageAlt: "",
                        title: "05. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-6",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home6.jpg",
                        imageAlt: "",
                        title: "06. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-7",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home7.jpg",
                        imageAlt: "",
                        title: "07. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-8",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home8.jpg",
                        imageAlt: "",
                        title: "08. Homepage",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/home-9",
                        imageSrc:
                          "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_home9.jpg",
                        imageAlt: "",
                        title: "09. Homepage",
                      },
                    ]}
                  />
                </li>
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="https://demo2.pavothemes.com/printec/shop/"
                    className="relative text-black font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Shop
                    </span>
                  </a>
                  <MegaMenu
                    variant="shop"
                    sections={[
                      {
                        title: "Shop layout",
                        links: [
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/",
                            label: "Shop Left Sidebar",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/?woocommerce_archive_sidebar=right",
                            label: "Shop Right Sidebar",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop?woocommerce_catalog_columns=4&woocommerce_archive_layout=canvas",
                            label: "Shop fullwidth",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/?top_banner=sidebar",
                            label: "Shop top banner",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/?top_banner=full&woocommerce_catalog_columns=4&woocommerce_archive_layout=canvas",
                            label: "Shop image categories",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/?layout=list",
                            label: "Shop listview",
                          },
                        ],
                      },
                      {
                        title: "Product layout",
                        links: [
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/plain-postal-boxes/?single_product_gallery_layout=vertical",
                            label: "Product Vertical",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/plain-postal-boxes",
                            label: "Product Horizontal",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/plain-postal-boxes/?single_product_gallery_layout=gallery",
                            label: "Product Grid",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/plain-postal-boxes/?single_product_gallery_layout=sticky",
                            label: "Product Sticky Info",
                          },
                        ],
                      },
                      {
                        title: "Dokan Layouts",
                        links: [
                          {
                            href: "https://demo2.pavothemes.com/printec/store-listing/",
                            label: "Storelist",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/store/esthershop/",
                            label: "Store Vendor",
                          },
                        ],
                      },
                      {
                        title: "Product Pages",
                        links: [
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/single-color-paper-bags/",
                            label: "Simple Product",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/promo-trucker-hat/",
                            label: "Variable Product",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/sleeve-baseball-t-shirt/",
                            label: "Grouped Product",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/swing-tags/",
                            label: "Sale Product",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/shop/paper-cups/",
                            label: "Product Countdown",
                          },
                        ],
                      },
                    ]}
                    promo={{
                      href: "https://demo2.pavothemes.com/printec/shop/",
                      titleLines: ["Supersized", "large", "gormat"],
                      label: "Box by Style",
                    }}
                  />
                </li>
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="https://demo2.pavothemes.com/printec/request-a-quote/"
                    className="relative text-black font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Printec
                    </span>
                  </a>
                  <MegaMenu
                    variant="default"
                    tabs={[
                      {
                        label: "Digital Design",
                        items: [
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/business-cards/",
                            title: "Brochures",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_cat1.jpg",
                            imageAlt: "Business Cards",
                            count: "5",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/packaging/",
                            title: "Packaging",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_cat2.jpg",
                            imageAlt: "Packaging",
                            count: "12",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/business-cards/",
                            title: "T-Shirts",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_cat3.jpg",
                            imageAlt: "Business Cards",
                            count: "5",
                          },
                        ],
                      },
                      {
                        label: "Industry Design",
                        items: [
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/greeting-cards/",
                            title: "Greeting Cards",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat5.jpg",
                            imageAlt: "Greeting Cards",
                            count: "3",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/stickers/",
                            title: "Stickers",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat4.jpg",
                            imageAlt: "Stickers",
                            count: "16",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/business-cards/",
                            title: "Business Cards",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat2.jpg",
                            imageAlt: "Business Cards",
                            count: "5",
                          },
                        ],
                      },
                      {
                        label: "Customized Print Design",
                        items: [
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/business-cards/",
                            title: "Business Cards",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h6_cat4.jpg",
                            imageAlt: "Business Cards",
                            count: "5",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/stickers/",
                            title: "Stickers",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h6_cat2.jpg",
                            imageAlt: "Stickers",
                            count: "16",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/presentation-folders/",
                            title: "Presentation Folders",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h6_cat3.jpg",
                            imageAlt: "Presentation Folders",
                            count: "6",
                          },
                        ],
                      },
                      {
                        label: "Web to Print",
                        items: [
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/flyers/",
                            title: "Flyers",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat3.jpg",
                            imageAlt: "Flyers",
                            count: "6",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/greeting-cards/",
                            title: "Greeting Cards",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat1.jpg",
                            imageAlt: "Greeting Cards",
                            count: "3",
                          },
                          {
                            href: "https://demo2.pavothemes.com/printec/product-category/business-cards/",
                            title: "Business Cards",
                            imageSrc:
                              "https://c.animaapp.com/mofvyhmcWjEMZ6/assets/h4_cat2.jpg",
                            imageAlt: "Business Cards",
                            count: "5",
                          },
                        ],
                      },
                    ]}
                  />
                </li>
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="https://demo2.pavothemes.com/printec/blog/"
                    className="relative text-black font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Blog
                    </span>
                  </a>
                  <DropdownMenu
                    items={[
                      {
                        href: "https://demo2.pavothemes.com/printec/blog/?blog_style=list",
                        label: "Blog – list",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/blog/?blog_style=style-1&sidebar-blog=0&blog_columns=3",
                        label: "Blog – grid",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/blog/",
                        label: "Blog – standard",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/last-printing-website-you-need-for-wordpress/",
                        label: "Single post 1",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/last-printing-website-you-need-for-wordpress/?sidebar-single=0",
                        label: "Single post 2",
                      },
                    ]}
                  />
                </li>
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="#"
                    className="relative text-black font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Pages
                    </span>
                  </a>
                  <DropdownMenu
                    items={[
                      {
                        href: "https://demo2.pavothemes.com/printec/about-us-1/",
                        label: "About us 01",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/about-us-2/",
                        label: "About us 02",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/services/",
                        label: "Services",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/out-team/",
                        label: "Our Team",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/pricing-plans/",
                        label: "Pricing Plans",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/request-a-quote/",
                        label: "Request a Quote",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/faqs/",
                        label: "FAQs",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/icon/",
                        label: "Icon",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/404",
                        label: "404",
                      },
                    ]}
                  />
                </li>
                <li className="static box-border caret-transparent list-item outline-[3px] break-words text-start md:relative md:inline-block md:text-left">
                  <a
                    href="https://demo2.pavothemes.com/printec/contact-1/"
                    className="relative text-black font-medium items-center box-border caret-transparent flex leading-7 outline-[3px] break-words text-start uppercase px-2 py-[5px] font-poppins md:text-left md:py-[25px] after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:text-neutral-400 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-semibold after:md:tracking-[normal] after:md:leading-4 after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:outline-[3px] after:md:break-words after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-left after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:uppercase after:md:underline-offset-auto after:md:align-middle after:md:visible after:md:ml-[7px] after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] break-words text-start md:min-h-[auto] md:min-w-[auto] md:text-left">
                      Contact Us
                    </span>
                  </a>
                  <DropdownMenu
                    items={[
                      {
                        href: "https://demo2.pavothemes.com/printec/contact-1/",
                        label: "Contact 1",
                      },
                      {
                        href: "https://demo2.pavothemes.com/printec/contact-2/",
                        label: "Contact 2",
                      },
                    ]}
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
