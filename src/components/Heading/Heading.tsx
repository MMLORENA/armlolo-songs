type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level: HeadingLevel;
  children: string | JSX.Element;
  className: string;
}

const Heading = ({ level, className, children }: HeadingProps): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
