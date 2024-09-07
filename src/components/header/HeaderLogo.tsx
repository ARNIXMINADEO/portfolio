import React from 'react'

interface Props {
    logoUrl: string;
    width: string;
}

function HeaderLogo({logoUrl, width}:Props) {
  return (
    <div style={{
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <img src={logoUrl} alt="Logo"/>
    </div>
  )
}

export default HeaderLogo
