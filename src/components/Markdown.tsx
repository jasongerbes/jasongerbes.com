'use client'

import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { CustomLink } from './CustomLink'
import { Heading } from './Heading'
import { Prose } from './Prose'
import { Codeblock } from './Codeblock'

export interface MdxProps {
  className?: string
  code: string
}

const mdxComponents: MDXComponents = {
  a: CustomLink,
  h1: (props) => <Heading level="h1" {...props} />,
  h2: (props) => <Heading level="h2" {...props} />,
  h3: (props) => <Heading level="h3" {...props} />,
  h4: (props) => <Heading level="h4" {...props} />,
  h5: (props) => <Heading level="h5" {...props} />,
  h6: (props) => <Heading level="h6" {...props} />,
  Image,
  Link,
  pre: Codeblock,
}

export function Markdown({ className, code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return (
    <Prose className={className}>
      <MDXContent components={mdxComponents} />
    </Prose>
  )
}
