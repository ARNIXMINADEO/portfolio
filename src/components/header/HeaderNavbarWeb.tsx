import { Button, Stack } from '@chakra-ui/react';
import React from 'react'

interface Props {
    buttons: Array<{icon: JSX.Element, title: string, path: string}>;
    // actions: Array<{icon: string, title: string, action: string}>;
    style: { buttomBackground: string, color: string, image: string };
}

function HeaderNavbarWeb({buttons = [], style}:Props) {
  console.log("HeaderNavbarWeb buttons", buttons);

  console.log("HeaderNavbarWeb style", style);
  return (
    <nav>
      <Stack direction='row' spacing={4} align='center'>
        {buttons.map((button, index) => {
          console.log("button", button);
            return (
              <Button colorScheme='gray' variant='outline' key={index} style={{
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
              }}>
                {button.icon}
                <p>{button.title}</p>
            </Button>
            )
          })}
      </Stack>
    </nav>
  )
}

export default HeaderNavbarWeb

        {/*<ul style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            margin: 0,
            listStyle: 'none',
            width: '100%',
            height: 'auto',
        }}>
            {buttons.map((button, index) => {
              console.log("button", button);
                return (
                    <li style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        transition: 'all 0.5s',
                        backgroundColor: style.buttomBackground,
                        color: style.color,
                    }} key={index}>
                        <a href={button.path}>
                            {button.icon}
                            <p>{button.title}</p>
                        </a>
                    </li>
                )
            })}
        </ul>*/}