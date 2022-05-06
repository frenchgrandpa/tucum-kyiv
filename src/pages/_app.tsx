import {AppProps} from "next/app";
import Head from "next/head";
import ThemeProvider from "@c/_app/ThemeProvider";
import I18nProvider from "@c/_app/I18nProvider";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <title>Title</title>
                {/*    TODO set title*/}
            </Head>
            <I18nProvider locales={pageProps.locales}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </I18nProvider>
        </>
    );
}
