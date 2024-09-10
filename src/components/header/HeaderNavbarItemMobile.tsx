import { Button } from '@chakra-ui/react';

interface Props {
  icon: JSX.Element;
  title: string;
  style: { buttomBackground: string };
  key: number;
  action: () => void;
}

function HeaderNavbarItemMobile({icon, title, style, key, action}:Props) {
  return (
    <Button colorScheme='gray' variant='outline' key={key} style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
      transition: 'all 0.5s',
      borderColor: style.buttomBackground,
      color: style.buttomBackground,
      width: '100%',
      height: '100px',
      fontFamily: 'Comfortaa',
      fontWeight: 'light',
      lineHeight: '0',
      gap: '20px',
    }} onClick={()=> action()}>
      {icon}
      <p>{title}</p>
  </Button>
  )
}

export default HeaderNavbarItemMobile