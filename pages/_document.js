import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg"/>
                    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
                    {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
                    {/*<link rel="manifest" href="/site.webmanifest"/>*/}
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000"/>
                    <meta name="apple-mobile-web-app-title" content="GvintGame"/>
                    <meta name="application-name" content="GvintGame"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}