import React from 'react'

interface Props {
    icon: string;
    text: string;
    isMobile: boolean;
    action: () => void;
}

function HeaderNavbarItemWeb({icon, text, isMobile, action}:Props) {
  return (
    <div>HeaderNavbarItemWeb</div>
  )
}

export default HeaderNavbarItemWeb