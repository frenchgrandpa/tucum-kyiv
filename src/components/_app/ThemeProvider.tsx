import {FC, useState} from "react";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";

const ThemeProvider: FC = ({children}) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{colorScheme}}
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default ThemeProvider;
