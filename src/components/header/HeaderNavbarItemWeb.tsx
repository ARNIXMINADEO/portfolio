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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
      transition: 'all 0.5s',
      borderColor: style.buttomBackground,
      borderRadius: '5px',
      color: style.buttomBackground,
      width: '100px',
      height: '50px',
    }} onClick={() => action()}>
      {icon}
      <p>{title}</p>
  </Button>
  )
}

export default HeaderNavbarItemWeb