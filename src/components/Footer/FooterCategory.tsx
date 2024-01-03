type Props = {
  title: string;
  children: React.ReactNode;
};

export const FooterCategory = ({ title, children }: Props) => (
  <div className="flex flex-col gap-4 text-center sm:text-left">
    <h4 className="uppercase text-xl md:text-sm text-gray-700 font-medium">
      {title}
    </h4>
    {children}
  </div>
);
