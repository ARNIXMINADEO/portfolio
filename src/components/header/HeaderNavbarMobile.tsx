import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react'

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
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{
          backgroundColor: style.color,
          color: style.buttomBackground,
        }}>
          <DrawerCloseButton />
          <DrawerBody style={{
            marginTop: '50px',
          }}>
            <Stack direction='column' spacing={3} align='center'>
              {buttons.map((button, index) => {
                console.log("button", button);
                  return (
                    <Button colorScheme='gray' variant='outline' key={index} style={{
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
                      gap: '20px',
                    }}>
                      {button.icon}
                      <p>{button.title}</p>
                  </Button>
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