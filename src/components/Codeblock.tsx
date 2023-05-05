'use client'

import { useRef } from 'react'
import {
  FileCode,
  FileCss,
  FileHtml,
  FileJs,
  FileJsx,
  FileText,
  FileTs,
  FileTsx,
  TerminalWindow,
} from '@/assets/phosphor-icons'
import { CopyButton } from './CopyButton'

export type CodeblockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  /** set by `rehype-pretty-code` */
  'data-language'?: string
  /** set by `rehype-pretty-code` */
  'data-theme'?: string
}

export function Codeblock({ children, ...props }: CodeblockProps) {
  const language = props['data-language']
  const theme = props['data-theme']
  const LanguageIcon = getIconForLanguage(language)
  const ref = useRef<HTMLPreElement>(null)

  return (
    <>
      <LanguageIcon
        className="text-foreground absolute left-4 top-[15px] hidden lg:top-[19px]"
        aria-hidden={true}
        data-language-icon
        data-theme={theme}
        width={20}
        height={20}
      />

      <pre ref={ref} {...props}>
        {children}
      </pre>

      <CopyButton
        className="absolute right-2.5 top-[9px] lg:right-[13px] lg:top-[13px]"
        elementRef={ref}
        data-theme={theme}
      />
    </>
  )
}

function getIconForLanguage(language: string | undefined) {
  switch (language) {
    case 'html':
      return FileHtml
    case 'css':
      return FileCss
    case 'js':
      return FileJs
    case 'jsx':
      return FileJsx
    case 'ts':
      return FileTs
    case 'tsx':
      return FileTsx
    case 'bash':
    case 'sh':
      return TerminalWindow
    case 'md':
    case 'mdx':
      return FileText
    default:
      return FileCode
  }
}
