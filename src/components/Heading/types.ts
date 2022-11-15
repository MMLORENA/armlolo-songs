export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  level: HeadingLevel;
  children: string | JSX.Element;
  className: string;
}
