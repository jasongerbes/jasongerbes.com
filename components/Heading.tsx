export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  children: React.ReactNode
}

export function Heading({ level: Tag, children, ...props }: HeadingProps) {
  return <Tag {...props}>{children}</Tag>
}
