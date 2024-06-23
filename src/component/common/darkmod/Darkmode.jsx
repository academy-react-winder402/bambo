import {motion} from 'framer-motion'
import React, {useState} from 'react'
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'


const DarkModeSwitch = () =>{

    const [isOn, setIsOn] = useState(() => {
      if (localStorage.getItem('theme') === 'light') {
        return true
      } else {
        return false
      }
    })

    const toggleSwitch = () => setIsOn(!isOn)

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    }

    if (isOn) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }

    if (
        localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
      ) { document.documentElement.classList.add('dark') } 
      else {
        document.documentElement.classList.remove('dark')
    }

    return(
        <div onClick={toggleSwitch} className={`flex-start flex h-[30px] w-[70px] rounded-[50px] mt-[0.4rem] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ isOn && 'place-content-end'}`}>

            <motion.div
                className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
            >
                <motion.div whileTap={{rotate: 360}}>
                    {isOn ? (<RiSunFill className="h-4 w-4 text-yellow-300" />) : (<RiMoonClearFill className="h-4 w-4 text-slate-200" />)}
                </motion.div>

            </motion.div>      

        </div>
    );
};

export{DarkModeSwitch};
