import { extendTheme } from "@chakra-ui/react"

const ThemeConfig = extendTheme({
    colors: {
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
    fonts: {
        heading: "Comfortaa",
        body: "Comfortaa",
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold",
            },
        },
    },
  })

export default ThemeConfig    