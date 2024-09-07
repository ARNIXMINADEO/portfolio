import { Button } from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  actions: {open:{icon: JSX.Element, title: string, action: string}, close:{icon: JSX.Element, title: string, action: string}};
  style: { buttomBackground: string, color: string, image: string };
}

function HeaderNavbarButtonDrawerClose({isOpen, onOpen, actions, style}:Props) {
  return (
    <Button
       colorScheme='gray' variant='outline' style={{
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
        width: '40px',
        height: '40px',
      }}
       onClick={onOpen}>
        { isOpen ? actions.close.icon : actions.open.icon }
      </Button>
  )
}

export default HeaderNavbarButtonDrawerClose