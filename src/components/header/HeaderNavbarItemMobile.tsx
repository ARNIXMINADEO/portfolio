import React from 'react'

interface Props {
    icon: string;
    text: string;
    isMobile: boolean;
    action: () => void;
}

function HeaderNavbarItemMobile({icon, text, isMobile, action}:Props) {
  return (
    <div>HeaderNavbarItemMobile</div>
  )
}

export default HeaderNavbarItemMobile