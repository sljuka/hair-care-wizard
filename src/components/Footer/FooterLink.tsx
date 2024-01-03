type Props = {
  children: React.ReactNode;
};

export const FooterLink = ({ children }: Props) => (
  <li>
    <a className="text-lg md:text-sm text-gray-500" href="#">
      {children}
    </a>
  </li>
);
