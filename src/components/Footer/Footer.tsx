import { Logo } from "@/app/Logo";
import { FooterCategory } from "./FooterCategory";
import { FooterCategoryList } from "./FooterCategoryList";
import { FooterLink } from "./FooterLink";

export const Footer = () => (
  <section className="bg-[#E8EFE9] flex-1 self-stretch flex flex-col py-12 sm:px-4 md:px-12 lg:px-32 gap-10">
    <div className="flex flex-1 flex-col gap-10 md:items-left items-center md:flex-row justify-between">
      <Logo className="w-14 h-14" />
      <div className="flex flex-col sm:flex-row gap-10">
        <FooterCategory title="Product">
          <FooterCategoryList>
            <FooterLink>Popular</FooterLink>
            <FooterLink>Trending</FooterLink>
            <FooterLink>Guided</FooterLink>
            <FooterLink>Trending</FooterLink>
          </FooterCategoryList>
        </FooterCategory>

        <FooterCategory title="Company">
          <FooterCategoryList>
            <FooterLink>Press</FooterLink>
            <FooterLink>Mission</FooterLink>
            <FooterLink>Strategy</FooterLink>
            <FooterLink>About</FooterLink>
          </FooterCategoryList>
        </FooterCategory>
        <FooterCategory title="Info">
          <FooterCategoryList>
            <FooterLink>Support</FooterLink>
            <FooterLink>Customer Service</FooterLink>
            <FooterLink>Get Started</FooterLink>
          </FooterCategoryList>
        </FooterCategory>
        <FooterCategory title="Follow us">
          <FooterCategoryList>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Google</FooterLink>
            <FooterLink>X</FooterLink>
          </FooterCategoryList>
        </FooterCategory>
      </div>
    </div>
    <div>
      <hr className="border-gray-300 pb-4" />
      <div className="text-gray-400 text-sm text-center">
        © 2021 Manual. All rights reserverd
      </div>
    </div>
  </section>
);
