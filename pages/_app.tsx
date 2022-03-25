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
import ContentLoader from '../src/components/ContentLoader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false ;


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [content, setContent] = useState<Object>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setDark(getTheme());
    getAllContent();
  }, []);
  

  async function getAllContent() {
    const projects = await fetchContent('projects', 'title, body, img, href, gitref, blogref');
    const story = await fetchContent('story', 'text, iconType, iconName');
    const home = await fetchContent('homelinks', 'text, iconType, iconName, type, href');
    const sections = await fetchContent('sections', 'num, page, element, text');

    setContent({ 
      projects: projects,
      story: story,
      home: home,
      sections: sections
    })

    setLoading(false)
  }

  if (loading) return <ContentLoader />

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

        
        
        <Component {...pageProps} content={content}/>
        
        <div className="absolute pr-6 float-right pb-5 right-0 top-5 z-40
                        md:right-10 md:top-5"><DarkModeSwitch/></div>

          <div>
            { router.asPath != '/' && <Link href={'/'} passHref ><span className="fixed w-screen h-screen z-20"></span></Link>}
            <Home content={content}/>
          </div> 

      </div>
    </main>
    )
    

}

export default MyApp
