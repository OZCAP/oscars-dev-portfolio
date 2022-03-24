import { LinksProps, LinkData } from '../utils/interfaces'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';

const HomeLinks = (props:LinksProps) => {
    const links = props.links;

    return (
      <AnimatePresence >
        {links.map((link:LinkData) =>
          <motion.div
            key={link.text}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1.05, color: "#475569" }}
            transition={{ 
            duration: 0.5 + (links.indexOf(link)/7),
            type: "spring",
            damping: 10,
            stiffness: 300 }}>
              {link.href.includes(':') ? 
              <a href={link.href} target="_blank" rel="noreferrer"><div
              className="text-slate-300 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer select-none" 
              style={{transition: "color 0.5s ease"}}>{link.text}</div></a>
              :
              <Link href={link.href} passHref><div
              className="text-slate-300 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer select-none" 
              style={{transition: "color 0.5s ease"}}>{link.text}</div></Link>
              }
              
          </motion.div>
          )}
        </AnimatePresence>
    );
  };

export default HomeLinks;