import { motion } from 'framer-motion';
import Image from 'next/image';
import BannerImg from "../assets/banner-thumb.png";

const FadeIn = {
    initial: {
        y: "5rem",
        opacity: 0,
    },
    vissible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bouces: 0.25,
            delay: 0.2,
        }
    }
}

function Banner() {
    return (
        <section className="bg-shape-left flex flex-col items-center pt-24 pb-10" id="home">
            <motion.div variants={FadeIn} animate="vissible" initial="initial" className="md:w-2/5 w-11/12 text-center flex flex-col items-center">
                <h1 className="text-5xl leading-tight font-semibold">Top Quality Digital Products to explore</h1>
                <p className="text-xl py-10 leading-loose">Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                <button className="border-2 font-semibold bg-red-500 border-red-500 px-8 py-2.5 rounded-3xl text-white">Explore</button>
            </motion.div>
            <figure>
                <Image src={BannerImg} alt="banner thumb" width={800} objectFit="contain" />
            </figure>
        </section>
    )
}

export default Banner
