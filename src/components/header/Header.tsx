import useWindowSize from '../../hooks/useWindowSize';
import paramsHeader from '../../constants/ParamsHeader';
import HeaderLogo from './HeaderLogo';
import HeaderNavbarWeb from './HeaderNavbarWeb';
import HeaderNavbarMobile from './HeaderNavbarMobile';


interface Props{
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

function Header({darkMode}:Props) {
    const { width } = useWindowSize();
    const paramsHeaderData = paramsHeader();
    console.log("paramsHeaderData", paramsHeaderData);

  return (
    <header style={{
        backgroundColor: darkMode ? paramsHeaderData.background.style.dark.color : paramsHeaderData.background.style.light.color,
        padding: width > 768 ? '20px 40px' : '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // position: 'fixed',
        width: '100vw',
        height: '100px',
        // zIndex: 1000,
        transition: 'all 0.5s',
    }}>
        <HeaderLogo logoUrl={paramsHeaderData.logo.url} width={paramsHeaderData.logo.style.width}/>
        {width > 768 ?
         <HeaderNavbarWeb buttons={paramsHeaderData.navbar.buttons} style={!darkMode ? paramsHeaderData.navbar.style.dark : paramsHeaderData.navbar.style.light}/> 
         : 
         <HeaderNavbarMobile/>}
    </header>
  )
}

export default Header