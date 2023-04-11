import { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  a: (props) => <Link href={props.href as string}>{props.children}</Link>,
  Image,
  Link,
}
