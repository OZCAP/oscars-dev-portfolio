import { InferGetStaticPropsType } from 'next'
import Frame from '../src/components/Frame'
import filterPageData from '../src/utils/filterPageData'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import fetchContent from '../src/utils/fetchContent';

interface TextContent {
  t1: string,
  b1: string,
  b2: string, 
  img: string
}

const About = ({ about }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
      <Frame title="About">
          <div className="text-lg">
          <p className="my-3 mb-6 text-2xl font-semibold
                        lg:text-3xl">
                          {/* 
                          @ts-ignore */}
                          {about.t1}</p>
          <div className="w-5/12 float-right ml-1 mr-3 
                          md:ml-4
                          lg:w-4/12">
                            {/* 
                          @ts-ignore */}
          <Image className="rounded-3xl" src={about.img} alt="" width={640} height={640}/>
          </div>
          <div className="my-3 text-md
                        lg:text-2xl">
                        {/* 
                          @ts-ignore */}
                        <ReactMarkdown>{about.b1}</ReactMarkdown></div>
          
          <div className="mt-7 text-md
                        lg:text-xl lg:mt-14">
                        {/* 
                          @ts-ignore */}
                        <ReactMarkdown>{about.b2}</ReactMarkdown></div>
        </div>
        
      </Frame>

  )
}


export const getStaticProps = async () => {
  //@ts-ignore
  const revalidation = parseInt(process.env.NEXT_PUBLIC_REVALIDATION);
  const sections = await fetchContent('sections', 'num, page, element, text');
  //@ts-ignore
  const about: TextContent = filterPageData('about', sections);
  

  return {
    props: {
      about,
    },
    revalidate: revalidation
  }
}

export default About
