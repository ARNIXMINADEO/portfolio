import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import HeaderNavbarItemMobile from './HeaderNavbarItemMobile';
import HeaderNavbarButtonDrawerClose from './HeaderNavbarButtonDrawerClose';

interface Props {
  buttons: Array<{icon: JSX.Element, title: string, path: string}>;
  actions: {open:{icon: JSX.Element, title: string, action: string}, close:{icon: JSX.Element, title: string, action: string}};
  style: { buttomBackground: string, color: string, image: string };
}

function HeaderNavbarMobile({buttons = [], actions, style}:Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()
  return (
    <nav>
      <HeaderNavbarButtonDrawerClose isOpen={isOpen} onOpen={onOpen} actions={actions} style={style} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{
          backgroundColor: style.color,
          color: style.buttomBackground,
          borderRadius: '10px 0px 0px 10px',
        }}>
          <DrawerCloseButton />
          <DrawerBody style={{
            marginTop: '50px',
          }}>
            <Stack direction='column' spacing={3} align='center'>
              {buttons.map((button, index) => {
                console.log("button", button);
                  return (
                    <HeaderNavbarItemMobile icon={button.icon} title={button.title} style={style} key={index} action={() => {}} />
                  )
                })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default HeaderNavbarMobile