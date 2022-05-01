//@ts-nocheck
import { LinksProps, LinkData } from '../utils/interfaces'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelopeSquare);

const SocialIcons = (props:LinksProps) => {
  const loading = props.loading
  const links = props.links;
  return (
    <div className="text-slate-500 dark:text-slate-400 space-x-5 pt-1 flex">
    { !loading &&
      links.map((link: LinkData) =>
        <motion.a
          className="hover:text-yellow-700"
          style={{transition: "color 0.5s ease"}}
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x:'10vw' }}
          transition={{duration:0.5+(links.indexOf(link)/7)}}>
          <FontAwesomeIcon icon={[link.iconType, link.iconName]} width={60} />
        </motion.a>
      )}
    </div>
    );
  };

  export default SocialIcons;