import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterMain = () => {
  return (
    <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full mb-0 md:mb-[50px]">
      <div className="relative box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto md:flex-nowrap">
        <FooterBrand />
        <FooterColumn
          title="Get In Touch"
          outerVariant="md:w-[24%]"
          innerWrapperVariant="mb-[30px] pr-0 md:mb-0 md:pr-[30px]"
          titleWrapperVariant="mb-5"
          contentVariant="leading-[30px] max-w-full font-poppins md:max-w-60 md:w-60"
          contactText="2972 Westheimer Rd. Santa Ana, Illinois 85486\nsupport@example.com"
          contactPhone="+ (406) 555-0120"
        />
        <FooterColumn
          title="Information"
          outerVariant="md:w-[17%]"
          innerWrapperVariant="mb-[30px] pr-0 md:mb-0 md:pr-[30px]"
          titleWrapperVariant="mb-[15px] md:mb-5"
          titleClassName="tracking-[-0.18px]"
          links={[
            {
              label: "Help Center",
              href: "https://demo2.pavothemes.com/printec/faqs/",
            },
            {
              label: "Shipping",
              href: "https://demo2.pavothemes.com/printec/shop/",
            },
            {
              label: "Returns ",
              href: "https://demo2.pavothemes.com/printec/shop/",
            },
            {
              label: "Policies ",
              href: "https://demo2.pavothemes.com/printec/shop/",
            },
            {
              label: "Gift Cards",
              href: "https://demo2.pavothemes.com/printec/shop/",
            },
          ]}
        />
        <FooterColumn
          title="Useful links"
          outerVariant="md:w-[17%]"
          innerWrapperVariant="mb-[30px] pr-0 md:mb-0 md:pr-[30px]"
          titleWrapperVariant="mb-[15px] md:text-start md:mb-5"
          titleClassName="tracking-[-0.18px]"
          links={[
            {
              label: "My Account ",
              href: "https://demo2.pavothemes.com/printec/my-account/",
            },
            {
              label: "Order Tracking ",
              href: "https://demo2.pavothemes.com/printec/my-orders/",
            },
            {
              label: "All Products ",
              href: "https://demo2.pavothemes.com/printec/shop/",
            },
            {
              label: "All Services ",
              href: "https://demo2.pavothemes.com/printec/services/",
            },
            {
              label: "Service Detail",
              href: "https://demo2.pavothemes.com/printec/printing-services/",
            },
          ]}
        />
        <FooterColumn
          title="About Us"
          outerVariant="md:w-[15%]"
          titleWrapperVariant="box-border caret-transparent outline-[3px] break-words text-center mb-[15px] md:text-start md:mb-5"
          titleClassName="tracking-[-0.18px]"
          links={[
            {
              label: "Our story ",
              href: "https://demo2.pavothemes.com/printec/about-us-1/",
            },
            {
              label: "Contacts ",
              href: "https://demo2.pavothemes.com/printec/contact-1/",
            },
            {
              label: "Affiliate Program ",
              href: "https://demo2.pavothemes.com/printec/contact-2/",
            },
            {
              label: "Referral Program ",
              href: "https://demo2.pavothemes.com/printec/contact-2/",
            },
            {
              label: "Careers",
              href: "https://demo2.pavothemes.com/printec/contact-2/",
            },
          ]}
        />
      </div>
    </section>
  );
};
