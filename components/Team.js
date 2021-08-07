import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {useState } from 'react';
import { TEAM_DATA } from '../helpers/Team';
import SectionHeader from './SectionHeader';


function Team() {

    const [isHovering, setHovering] = useState(false)


    const icon_variant = {
        initial: {
            x: "10rem",
            opacity: 0,
        },
        vissible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                delay: 0.05*(3-i),
            }
        }),
        exit: {

        }
    }

    return (
        <section className="flex flex-col items-center relative pb-16">
            <div className="text-center">
                <SectionHeader slogan="OUR TEAM" text="The most qualified and talented individuals"/>
            </div>
            <div className="py-10 w-8/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {TEAM_DATA.map(item => {
                    return (
                        <motion.div key={item.id} className="relative group flex flex-col items-center hover:shadow-xl border-2 border-gray-100 rounded-md w-full p-10" onTapStart={() => setHovering({ [item.id]: true })} onTap={() => setHovering({ [item.id]: true })} onHoverStart={() => setHovering({ [item.id]: true })} onHoverEnd={()=>setHovering({ [item.id]: false })}>
                            <figure className="relative border-2 border-red-500 w-32 h-32 rounded-full overflow-hidden mb-5">
                                <Image src={item.imgSrc} alt={item.altText} layout="responsive"/>
                            </figure>
                            <span className="text-lg font-semibold pb-1 group-hover:text-red-500">{item.title}</span>
                            <h1 className="text-base group-hover:text-red-500">{item.designation}</h1>
                            <AnimatePresence>
                                {isHovering[item.id] &&
                                    <motion.ul key={item.id} className="flex space-y-3 flex-col py-2 pl-8 pr-3 overflow-hidden absolute bottom-2 right-0">
                                    {item.socialProfile.map(item => {
                                        return (
                                            <motion.li layout variants={icon_variant} custom={item.id} animate="vissible" initial="initial" key={item.id}>{<item.icon aria-label={item.name} className="text-lg hover:to-blue-600 text-red-500" />}</motion.li>
                                            )
                                        })}
                                    </motion.ul>}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>
        </section >
    )
}

export default Team