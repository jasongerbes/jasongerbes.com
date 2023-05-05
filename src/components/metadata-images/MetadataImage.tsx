import { Image } from 'contentlayer/generated'

export interface MetadataImage {
  title: string
  pathname?: string
  logoImage?: Image
  bannerText?: string
}

export function MetadataImage({
  title,
  pathname,
  logoImage,
  bannerText,
}: MetadataImage) {
  const siteLogoImageSrc = 'https://jasongerbes.com/images/site-logo.png'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '90px 80px 45px',
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(150deg, rgba(10,10,10,1) 0%, rgba(23,23,23,1) 43%, rgba(38,38,38,1) 100%)',
      }}
    >
      {bannerText && (
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: -90,
            transform: 'rotate(45deg)',
            backgroundColor: '#0f766e',
            color: '#042f2e',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 500,
            textTransform: 'uppercase',
            padding: '24px 112px',
            letterSpacing: '0.05em',
          }}
        >
          {bannerText}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        {logoImage && <MetadataLogoImage image={logoImage} />}

        <p
          style={{
            fontSize: 75,
            lineHeight: 1.025,
            marginTop: 42,
            fontWeight: 400,
            color: '#f5f5f5',
            maxWidth: '80%',
          }}
        >
          {title}
        </p>
      </div>

      <p
        style={{
          fontSize: 26,
          color: '#a3a3a3',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          paddingTop: 24,
        }}
      >
        jasongerbes.com{pathname}
      </p>

      <img
        src={siteLogoImageSrc}
        width={160}
        height={160}
        style={{
          objectFit: 'contain',
          marginLeft: 24,
          position: 'absolute',
          bottom: 0,
          right: 45,
        }}
      />
    </div>
  )
}

function MetadataLogoImage({ image }: { image: Image }) {
  const imageSrc = `https://jasongerbes.com${image.src}`

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: image.theme === 'light' ? '#929292' : '#333333',
        borderRadius: 24,
        backgroundColor: image.theme === 'light' ? 'white' : '#262626',
        width: 160,
        height: 160,
      }}
    >
      <img
        src={imageSrc}
        width={110}
        height={110}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
