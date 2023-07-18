'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { Check, Copy } from '@/assets/phosphor-icons'

export interface CopyButtonProps {
  className?: string
  elementRef: React.RefObject<HTMLElement>
}

export function CopyButton({
  className,
  elementRef,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    if (typeof window === 'undefined' || !elementRef.current) return
    const text = elementRef.current.innerText
    window.navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1500)
  }

  return (
    <button
      className={clsx(
        'h-8 w-8 cursor-pointer rounded-md text-primary-600 ring-1 ring-inset ring-gray-500/20 backdrop-blur-md transition-colors hover:bg-gray-100 hover:text-primary-500 dark:hover:bg-gray-800',
        className,
      )}
      aria-label="Copy to Clipboard"
      title="Copy to Clipboard"
      onClick={copyToClipboard}
      {...props}
    >
      <div className="relative h-full w-full p-1">
        <Copy
          className={clsx(
            'absolute transition-transform',
            isCopied ? 'scale-0' : 'scale-100',
          )}
          width={24}
          height={24}
        />
        <Check
          className={clsx(
            'absolute transition-transform',
            isCopied ? 'scale-100' : 'scale-0',
          )}
          width={24}
          height={24}
        />
      </div>
    </button>
  )
}
