import { ImageResponse } from 'next/server'
import { getCoolThing } from '../utils'
import clsx from 'clsx'

// This doesn't seem to currently support dynamic values
// export const alt = 'TODO'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function og({ params }: { params: { id: string } }) {
  const { title, logoImg } = getCoolThing(params.id)
  const logoImgSrc = `https://jasongerbes.com${logoImg.src}` // need to hard-code the full URL

  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center w-full h-full pt-24 pb-8 px-8 border bg-neutral-900">
        <div
          tw="absolute bg-teal-600 py-4 px-28 text-center text-3xl font-medium uppercase tracking-wider text-teal-900"
          style={{
            top: 70,
            left: -90,
            transform: 'rotate(-45deg)',
          }}
        >
          Cool Stuff
        </div>

        <div
          tw={clsx(
            'flex items-center justify-center rounded-3xl border w-56 h-56',
            logoImg.theme === 'light'
              ? 'bg-white border-teal-900/20'
              : 'bg-neutral-800 border-neutral-700/50'
          )}
        >
          <img
            src={logoImgSrc}
            width={160}
            height={160}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p tw="text-neutral-100 text-[85px] font-semibold max-w-full mt-8">
          {title}
        </p>

        <p tw="text-neutral-400 text-[28px] mt-4">jasongerbes.com/cool-stuff</p>
      </div>
    ),
    { ...size, debug: false }
  )
}
