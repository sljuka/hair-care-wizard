type Props = {
  category: string;
  title: string;
  description: string;
};

export const TherapySectionDetails = ({
  category,
  title,
  description,
}: Props) => (
  <div className="flex flex-col gap-6 p-4">
    <div>
      <p className="text-gray-500 pb-2 tracking-widest text-xs uppercase">
        {category}
      </p>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    <p className="text-sm text-gray-500 leading-loose">{description}</p>
  </div>
);
