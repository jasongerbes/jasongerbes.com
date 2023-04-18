import { CoolThing } from '@/.contentlayer/generated'
import clsx from 'clsx'
import Image from 'next/image'

export interface CoolThingIconProps {
  className?: string
  thing: CoolThing
  size: 'normal' | 'large'
}

export function CoolThingIcon({ className, thing, size }: CoolThingIconProps) {
  const { logoImg } = thing
  const imgSize = size === 'normal' ? 36 : 80

  return (
    <div
      className={clsx(
        'flex items-center justify-center border border-primary-900/20 dark:border-gray-700/50',
        {
          'bg-white dark:bg-gray-800': logoImg.theme === 'auto',
          'bg-white dark:bg-gray-200': logoImg.theme === 'light',
          'bg-gray-800': logoImg.theme === 'dark',
        },
        {
          'rounded-lg p-2': size === 'normal',
          'rounded-2xl p-6': size === 'large',
        },
        className
      )}
    >
      <Image
        className={clsx('shrink-0', {
          'h-9 w-9': size === 'normal',
          'h-20 w-20': size === 'large',
        })}
        src={logoImg.src}
        alt={`The logo image for ${thing.title}`}
        width={imgSize}
        height={imgSize}
      />
    </div>
  )
}
