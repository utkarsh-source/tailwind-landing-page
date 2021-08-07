import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';


const NAV = [
    'home', 'features',  'pricing', 'testimonials'
]


function Header() {

    const headerRef = useRef()

    const [isDrawerToggled, setDrawerToggle] = useState(false)
    
    const handleMobileDrawer = (open=false) => {
        setDrawerToggle(open)
    }

     const DRAWER_VARIANT = () => {
        return {
            hidden: {
                scaleX: 0,
                transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.5,
                    staggerChildren: 0.05,
                    delay: 0.1,
                },
            },
            vissible: {
                scaleX: 1,
                originX: 0,
                originY : 0,
                transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.5,
                    delayChildren: 0.1,
                    staggerChildren: 0.05,
                }
            }
        }
    }

    const ITEM_VARIANT = () => {
        return {
            hidden: {
                x: "-8rem",
                opacity: 0,
            },
            vissible: {
                x: 0,
                opacity: 1,
            }
        }
    }


     const classToggle = () => {
        if (window.scrollY >= 10) {
                headerRef.current.classList.add("shadow-md");
                headerRef.current.classList.add("py-2");
                return
        } else {
            headerRef.current.classList.remove("shadow-md");
            headerRef.current.classList.remove("py-2");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', classToggle)
        return  ()=> {
            window.removeEventListener('scroll', classToggle)
        }
    }, [])
    
    return (
        <header ref={headerRef} className="sticky top-0 left-0 z-50 bg-white md:px-14 px-5 flex space-x-4 p-4 transition duration-75 items-center justify-between">
            <figure >
                <Image src={logo} alt="Startup Landing Logo" objectFit="contain" width={180}/>
            </figure>
            <nav className="lg:inline-block hidden">
                <ul className="flex space-x-14">
                    {NAV.map((item, i) => {
                        console.log(item);
                        return (
                            <li key={i} className="capitalize cursor-pointer hover:text-red-500"><Link activeClass="" to={item} smooth={true} spy={true}  className="">{item}</Link></li>
                        )
                    })}
                </ul>
            </nav>
            <div className="flex flex-nowrap items-center">
                <button className="border-2 border-red-500 text-base md:px-8 md:py-3 px-4 py-1 rounded-full md:font-semibold text-red-500">Get Started</button>
                <FaBars onClick={()=>handleMobileDrawer(true)} className="inline lg:hidden text-3xl ml-5 cursor-pointer"/>
            </div>
              <AnimatePresence>
            {isDrawerToggled &&
                <motion.nav className="fixed z-50 px-5 top-0 -left-4 h-screen w-1/2 bg-black" variants={DRAWER_VARIANT()} initial="hidden" animate="vissible" exit="hidden">
                    <motion.div className="relative py-5 text-right"><FaTimes area-label="close button" className="inline-block text-2xl cursor-pointer text-white" onClick={()=>handleMobileDrawer(false)}/></motion.div>
                <ul className="flex flex-col space-y-10">
                    {NAV.map((item, index) => {
                            return (
                                <motion.li variants={ITEM_VARIANT()}  whileHover={{scale: 1.05, color: "blue", originX:0, transition:{type:"tween", duration: 0.1,}}}  key={index}>
                                    <Link className="capitalize text-white text-lg pb-1 border-b-2 border-gray-100" activeClass="active" to={item} spy={true} smooth={true}>{item}</Link>
                                </motion.li>
                            )
                    })}
                </ul>
                    </motion.nav>}
            </AnimatePresence>
        </header>
    )
}

export default Header
