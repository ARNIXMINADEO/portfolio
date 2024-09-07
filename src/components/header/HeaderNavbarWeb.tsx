import { Stack } from '@chakra-ui/react';
import HeaderNavbarItemWeb from './HeaderNavbarItemWeb';

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
              <HeaderNavbarItemWeb icon={button.icon} title={button.title} style={style} key={index} action={() => {}} />
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