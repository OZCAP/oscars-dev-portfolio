//@ts-nocheck
import type { NextPage } from 'next'
import Frame from '../src/components/Frame'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMicrochip, faServer, faWifi} from '@fortawesome/free-solid-svg-icons'
import filterPageData from '../src/utils/filterPageData'
import ReactMarkdown from 'react-markdown'
import fetchContent from '../src/utils/fetchContent';
//@ts-ignore
library.add(fab, faServer, faWifi, faMicrochip);

const Story: NextPage = ({ story, text }) => {

  return (
    <Frame title="Story">
      <div className="text-lg md:text-2xl md:px-1">

        {story.map((story) => 

          <div key={story.iconName} 
            className="mb-6
            md:my-12
            ">
            <div 
            className="w-3/12 float-right mx-3 mt-2
                        md:w-1/12 text-6xl">
              <FontAwesomeIcon icon={[ story.iconType, story.iconName ]} width={75} />
            </div>
            <ReactMarkdown>{story.text}</ReactMarkdown>

          </div>
        )}

        <hr />
        <div className="my-6">
          <div className="mb-3">
            <ReactMarkdown>{text.b1}</ReactMarkdown>
          </div>
            <ReactMarkdown>{text.b2}</ReactMarkdown>
          </div>
        </div>
    </Frame>

  )
}

export const getStaticProps = async () => {
  const sections = await fetchContent('sections', 'num, page, element, text');

  const story = await fetchContent('story', 'text, iconType, iconName');
  const text = filterPageData('story', sections);

  return {
    props: {
      story,
      text
    },
    revalidate: process.env.NEXT_PUBLIC_REVALIDATION
  }
}

export default Story
