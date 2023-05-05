import { CoolThing } from 'contentlayer/generated'
import { cva } from 'class-variance-authority'
import Image from 'next/image'

export interface CoolThingIconProps {
  className?: string
  thing: CoolThing
  size: 'medium' | 'large'
}

const icon = cva(
  'flex items-center justify-center border border-primary-900/20 dark:border-gray-700/50',
  {
    variants: {
      theme: {
        auto: 'bg-white dark:bg-gray-800',
        light: 'bg-white dark:bg-gray-200',
        dark: 'bg-gray-800',
      },
      size: {
        medium: 'rounded-lg p-2',
        large: 'rounded-2xl p-6',
      },
    },
  }
)

const image = cva('shrink-0', {
  variants: {
    size: {
      medium: 'h-9 w-9',
      large: 'h-20 w-20',
    },
  },
})

export function CoolThingIcon({ className, thing, size }: CoolThingIconProps) {
  const { logoImage } = thing
  const imgSize = size === 'medium' ? 36 : 80

  return (
    <div className={icon({ theme: logoImage.theme, size, className })}>
      <Image
        className={image({ size })}
        src={logoImage.src}
        alt={`The logo image for ${thing.title}`}
        width={imgSize}
        height={imgSize}
      />
    </div>
  )
}
