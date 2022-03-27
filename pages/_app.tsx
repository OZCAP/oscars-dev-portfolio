import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';
import Home from '../src/components/Home';
import { useEffect, useState } from 'react';
import { getTheme } from '../src/utils/getTheme';
import DarkModeSwitch from '../src/components/DarkModeSwitch';
import { useRouter } from 'next/router';
import fetchContent from '../src/utils/fetchContent';
import filterPageData from '../src/utils/filterPageData';

import { HomeLink } from "../src/utils/interfaces";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false ;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [content, setContent] = useState<Object>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTheme();
    getHomeContent();
    setLoading(false);
  }, []);

  async function getHomeContent() {
    const sections = await fetchContent('sections', 'num, page, element, text');
    const homePageLinks = await fetchContent('homelinks', 'text, iconType, iconName, type, href');
    //@ts-ignore
    const titles = filterPageData('home', sections).titles.split(',');
    //@ts-ignore
    const textLinks = homePageLinks.filter((link: HomeLink) => link.type == 'textLink')
    //@ts-ignore
    const iconLinks = homePageLinks.filter((link: HomeLink) => link.type == 'iconLink')
    setContent({ 
      titles: titles,
      textLinks: textLinks,
      iconLinks: iconLinks
    })
  }

  return(
    <main className="bg-slate-50 dark:bg-slate-700 h-screen">
      <div className="max-w-screen-xl mx-auto">
        <Head>
          <title>{"Oscar's Dev Portfolio"}</title>
          <meta name="description" content="A portfolio of my personal projects and skills." />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="apple-mobile-web-app-title" content="Oscar's Dev Portfolio"/>
          <meta name="application-name" content="Oscar's Dev Portfolio"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <Component {...pageProps} />
        
        <div className="absolute pr-6 float-right pb-5 right-0 top-5 z-40
                        md:right-10 md:top-5"><DarkModeSwitch/></div>
          <div>
            { router.asPath != '/' && <Link href={'/'} passHref ><span className="fixed w-screen h-screen z-20"></span></Link>}
            <Home content={content} loading={loading}/>
          </div> 

      </div>
    </main>
    )
}

export default MyApp
