import { HeadingProps } from "./types";

const Heading = ({ level, className, children }: HeadingProps): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
