import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
// import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import Image from 'next/image';
import serviceThumb from '../assets/service-thumb.png';


const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },]


const IFRAME = () => {
    return {
        hidden: {
            x: "calc(-50% - 30rem)",
            y: "-50%",
            opacity: 0,
        },
        vissible: {
            x: "-50%",
            opacity: 1,
        },
        exit: {
            x: "calc(-50% + 30rem)",
            opacity: 0,
        }
        }
}
    


function Services() {
    
    const [isVideoModalOpen, setModalOpen] = useState(false)

    return (
        <section className="flex md:flex-row flex-col md:justify-center items-center pb-32">
            <figure className="relative md:mr-10 mr-0 md:mb-0 mb-10 md:w-1/2 w-full px-8 ">
                <Image src={serviceThumb} alt="service thumb" layout="responsive" objectFit="contain"/>
                <div area-label="play video button" className="grid place-content-center w-32 h-32 rounded-full cursor-pointer bg-red-500 bg-opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" onClick={()=>setModalOpen(true)}>
                    <FaPlay area-label="play video button" className=" text-4xl text-white"/>
                </div>
            </figure>
            <div className="md:w-2/5 w-full px-8 md:px-0 relative grid grid-cols-1 md:gap-5 gap-14">
                <div>
                    <SectionHeader slogan="OUR SERVICES" text="Business Goals Achieved with Design" bigHeading/>
                </div>
                {data.map(item => {
                    return (
                        <div className="relative md:w-2/3 w-full flex " key={item.id}>
                            <FeatureDetails {...item} />
                        </div>
                    )
                })}
            </div>
                    {/* <AnimatePresence>
                {isVideoModalOpen &&
                    <motion.div
                         variants={IFRAME()}
                            transition={
                                {
                                type: "spring",
                                bounce: 0.4
                                }
                            }
                            animate="vissible"
                            initial="hidden"
                            exit="exit"
                            className={styles.}
                        >
                    <motion.iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/rtgbaKBhdkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </motion.iframe>
                        <FaTimes className={styles.close__btn} onClick={() => setModalOpen(false)} />
                    </motion.div>
                }
            </AnimatePresence> */}
            
        </section >
    )
}

export default Services