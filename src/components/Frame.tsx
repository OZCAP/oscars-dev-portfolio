//@ts-nocheck
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Frame(props:any) {
    return (
        <motion.div
            style={{maxWidth:900}} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 absolute mt-16 left-1/2 transform -translate-x-1/2  w-screen rounded-md drop-shadow-2xl z-30 h-5/6 pt-2
                        md:pl-1 md:pr-1 md:w-9/12 
                        lg:w-6/12 lg:pl-3 lg:pr-2">
            <motion.div
                className="absolute float-right text-2xl top-3 right-5 
                        md:right-3"
                whileHover={{ scale:1.5}}
                >
                <Link href="/" passHref>
                    <div className="dark:text-slate-300 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} width='14'/>
                    </div>
                </Link>
            </motion.div>
            <h1 className="text-3xl font-semibold pl-4 pb-2 dark:text-slate-300">{props.title}</h1>
            <hr className='pb-1'/>
            <div className="pt-2 px-4 text-xl text-slate-700 dark:text-slate-300 overflow-x-hidden h-5/6">
                    {props.children}
            </div>
            
            
        </motion.div> 
    );
}

