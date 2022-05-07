import Document,{ Html, Head, Main, NextScript } from "next/document";
import {createGetInitialProps} from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;

    render(){
        return (
            <Html>
                <Head>
                    <link href="http://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet"/>
                    <link href="http://fonts.cdnfonts.com/css/chronicle-display" rel="stylesheet"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
