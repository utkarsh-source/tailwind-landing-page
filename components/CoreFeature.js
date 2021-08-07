
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import { FaPlay, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import Image from 'next/image';
import coreFeatureImg from '../assets/core-feature.png';
import { DATA } from '../helpers/Data';


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
    


function CoreFeature() {
    
    const [isVideoModalOpen, setModalOpen] = useState(false)

    return (
        <section className="flex md:flex-row flex-col md:justify-center items-center md:items-start pb-20">
            <figure className="relative md:w-1/2 w-full px-8 order-2">
                <Image src={coreFeatureImg} alt="service thumb" layout="responsive" objectFit="contain"/>
            </figure>
            <div className="md:w-2/5 w-full md:p-0 px-8 mb-10 md:mb-0 relative order-1">
                <div className="pb-10">
                    <SectionHeader slogan="CORE FEATURES" text="Smart Jackpots that you may love this anytime & anywhere" bigHeading/>
                </div>
                <div className="relative md:w-2/3 w-full bottom-2 border-black">
                    <FeatureDetails text={DATA().coreFeature.description} btnText={DATA().coreFeature.buttonText} />
                </div>
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

export default CoreFeature
