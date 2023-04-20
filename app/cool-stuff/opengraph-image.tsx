import { ImageResponse } from 'next/server'

export const alt = 'About Acme'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function og() {
  return new ImageResponse(
    (
      <div
        tw="bg-gray-900 text-white"
        style={{
          fontSize: 128,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About Acme
      </div>
    ),
    size
  )
}
