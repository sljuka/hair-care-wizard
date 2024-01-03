type Props = {
  children: React.ReactNode;
};

export const FooterCategoryList = ({ children }: Props) => (
  <ul className="flex flex-col gap-4 font-light">{children}</ul>
);
