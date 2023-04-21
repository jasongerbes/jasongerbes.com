import { CoolThing } from '@/.contentlayer/generated'

export function CoolThingMetadataImage({ thing }: { thing: CoolThing }) {
  const { title, logoImg } = thing
  const logoImgSrc = `https://jasongerbes.com${logoImg.src}` // need to hard-code the full URL
  const siteLogoImageSrc = 'https://jasongerbes.com/images/site-logo.png'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '96px 96px 0',
        width: '100%',
        height: '100%',
        backgroundColor: '#171717',
      }}
    >
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
        Cool Stuff
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: logoImg.theme === 'light' ? '#929292' : '#333333',
            borderRadius: 24,
            backgroundColor: logoImg.theme === 'light' ? 'white' : '#262626',
            width: 160,
            height: 160,
          }}
        >
          <img
            src={logoImgSrc}
            width={110}
            height={110}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p
          style={{
            fontSize: 75,
            lineHeight: 1.1,
            marginTop: 32,
            fontWeight: 400,
            color: '#f5f5f5',
            maxWidth: '80%',
          }}
        >
          {title}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          marginRight: -60,
        }}
      >
        <p
          style={{
            fontSize: 24,
            color: '#a3a3a3',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          jasongerbes.com/cool-stuff
        </p>
        <img
          src={siteLogoImageSrc}
          width={90}
          height={90}
          style={{ objectFit: 'contain', marginLeft: 24 }}
        />
      </div>
    </div>
  )
}
