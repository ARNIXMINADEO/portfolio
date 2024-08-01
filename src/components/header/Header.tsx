import useWindowSize from '../../hooks/useWindowSize';

function Header() {
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
        {selectHeader()}
    </header>
  )
}

export default Header