import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Switch } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion"


export default function DarkModeSwitch() {
    const [enabled, setEnabled] = useState(false)
  
    useEffect(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setEnabled(true)
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = (!enabled)
      if(newTheme) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
      else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      }
      setEnabled(!enabled);
    }
    
  
    const LabelIcon = (props:any) => (
      <FontAwesomeIcon
        width="16"
        style={{transition: 'color 1s'}}
        className={props.active ? "text-slate-500 dark:text-slate-400" : "text-slate-300 dark:text-slate-600"}
        icon={props.icon} />
        )
    
    return (
      <Switch.Group>
        <div className="flex items-center">
          <Switch.Label className="mr-2 float-right">
            <LabelIcon icon={faSun} active={enabled?'':'true'}/>
            </Switch.Label>
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className={`${
          enabled ? 'bg-slate-400' : 'bg-indigo-100'
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable dark mode</span>
        <motion.span
          animate={enabled ? {x:24} : {x:5}}
          className={`inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      <Switch.Label className="ml-2">
        <LabelIcon icon={faMoon} active={enabled?'true':''}/>
      </Switch.Label>
      </div>
      </Switch.Group>
    )
  }