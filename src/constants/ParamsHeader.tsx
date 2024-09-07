import { faBars, faBook, faHouse, faPhone, faSliders, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParamsHeader = () => {
    return {
        logo: {
            url: 'src/assets/logoHeader/1.png',
            style: {
                width: '100px',
            }
        },
        background: {
            style: {
                dark:{
                    color: '#000000',
                    image: 'https://www.google.com',
                },
                light:{
                    color: '#FFFFFF',
                    image: 'https://www.google.com',
                },
            }
        },
        navbar:{
            style: {
                dark:{
                    color: '#FFFFFF',
                    image: 'https://www.google.com',
                    buttomBackground: '#000000',
                },
                light:{
                    color: '#000000',
                    image: 'https://www.google.com',
                    buttomBackground: '#FFFFFF',
                    icon: <FontAwesomeIcon icon={faXmark}/>
                },
            },
            action:{
                open:{
                    title: 'Open',
                    icon: <FontAwesomeIcon icon={faBars} />,
                    action: 'open',
                },
                close:{
                    title: 'Close',
                    icon: <FontAwesomeIcon icon={faXmark} />,
                    action: 'close',
                }
            },
            buttons: [
                {
                    title: 'Home',
                    icon: <FontAwesomeIcon icon={faHouse} />,
                    path: '/',
                },
                {
                    title: 'About',
                    icon: <FontAwesomeIcon icon={faUser} />,
                    path: '/about',
                },
                {
                    title: 'Skills',
                    icon: <FontAwesomeIcon icon={faSliders} />,
                    path: '/skills',
                },
                {
                    title: 'Portfolio',
                    icon: <FontAwesomeIcon icon={faBook} />,
                    path: '/portfolio',
                },
                {
                    title: 'Contact',
                    icon: <FontAwesomeIcon icon={faPhone} />,
                    path: '/contact',
                }
            ],
        }
    }
}

export default ParamsHeader;