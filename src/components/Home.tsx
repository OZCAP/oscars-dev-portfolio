//@ts-nocheck
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { HomeLink } from "../utils/interfaces";

import filterPageData from "../utils/filterPageData";
import SocialIcons from './SocialIcons';
import HomeLinks from "./HomeLinks";


export default function Home(props) {
    const [titleNum, setTitleNum] = useState(0);
    const [titleVisible, setTitleVisible] = useState(true)

    const titles = filterPageData('home', props.content.sections).titles.split(',');
    const homePageLinks = props.content.home
    const textLinks = homePageLinks.filter((link: HomeLink) => link.type == 'textLink')
    const iconLinks = homePageLinks.filter((link: HomeLink) => link.type == 'iconLink')
  
    useEffect(() => {
      setTimeout(() => setTitleVisible(false), 2500);
      setTimeout(() => setTitleNum(newTitleNum()), 3000);
      setTitleVisible(true);
    }, [titleNum]);
  
    function newTitleNum() {
      let newTitleNum = titleNum + 1;
      if (newTitleNum >= titles.length) {
        newTitleNum = 0;
      } return newTitleNum;
    }
    
    return (
      <div className="h-screen pt-7 md:pt-0" style={{transition: 'background-color 0.5s'}}>
          <div className="h-auto md:h-screen pl-7 pt-7 md:pl-20 md:pr-20 md:pt-0 md:flex lg:mx-20 overflow-hidden z-10">
            <div className="mx-auto text-5xl text-slate-600 dark:text-slate-400 pb-4 md:my-auto md:pb-0 md:pl-5 inline-block">
              <div className="">Oscar Pickerill</div>
              <div className="static">
                <AnimatePresence>
                {titleVisible && 
                  <motion.div className="absolute pl-1 text-2xl text-slate-400 dark:text-slate-500" 
                    key="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 0.5 }}>{titles[titleNum].toLowerCase()}</motion.div>
                  }
                </AnimatePresence>
                <br />
              </div>
                <SocialIcons links={iconLinks} />
            </div>
            <div 
              className="m-auto text-5xl space-y-2 pt-2 text-slate-300 dark:text-slate-500 font-semibold select-none md:my-auto md:text-6xl md:space-y-0 md:pt-0" >
              {/* @ts-ignore */}
              <HomeLinks links={textLinks} />
            </div>
          </div>
      </div>
      )
  
  }