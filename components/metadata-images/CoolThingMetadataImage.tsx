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
        padding: '90px 80px 45px',
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(150deg, rgba(10,10,10,1) 0%, rgba(23,23,23,1) 43%, rgba(38,38,38,1) 100%)',
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
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
          fontSize: 22,
          color: '#a3a3a3',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        jasongerbes.com/cool-stuff
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
