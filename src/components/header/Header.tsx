import useWindowSize from '../../hooks/useWindowSize';

interface Props{
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

function Header({darkMode}:Props) {
    const { width } = useWindowSize();
    

    const selectHeader = () => {
        if (width > 768) {
            return (
                <div>
                    <h1>Header Completo</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Header Parcial</h2>
                </div>
            )
        }
    }
  return (
    <header>
        <img src={ParamsHeader} alt="Logo" />
        {selectHeader()}
    </header>
  )
}

export default Header