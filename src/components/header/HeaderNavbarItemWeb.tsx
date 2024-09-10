import { Button } from '@chakra-ui/react';

interface Props {
    icon: JSX.Element;
    title: string;
    style: { buttomBackground: string };
    key: number;
    action: () => void;
}

function HeaderNavbarItemWeb({icon, title, style, key, action}:Props) {
  return (
    <Button colorScheme='gray' variant='outline' key={key} style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px 10px 5px 10px',
      cursor: 'pointer',
      transition: 'all 0.5s',
      borderColor: style.buttomBackground,
      borderRadius: '10px',
      color: style.buttomBackground,
      width: '150px',
      height: '45px',
      fontFamily: 'Comfortaa',
      fontWeight: 'light',
      lineHeight: '0',
      gap: '10px',
    }} onClick={() => action()}>
      {icon}
      <p>{title}</p>
  </Button>
  )
}

export default HeaderNavbarItemWeb