import Image from 'next/image';
import { motion } from 'framer-motion'
import arrowEven from '../assets/arrowEven.svg';
import arrowOdd from '../assets/arrowOdd.svg';

function FeatureDetails({ id, title, text, imgSrc, altText, btnText, showIcon, isWhite=false, pattern}) {
    
    return (
        <>
            {altText && <figure className="relative md:mb-5 mb-10 mr-3 max-h-20 w-24">
                <Image src={imgSrc} alt={altText} width={100}  objectFit="contain"  />
            </figure>}
            {showIcon && <div className="flex items-center mb-5 relative py-2 ">
                <span className="bg-white grid w-16 h-16 text-blue-900 text-2xl rounded-3xl font-semibold place-items-center tracking-wide mr-4">{"0" + id}</span>
                {pattern === 'even' ?
                    <figure  className="lg:inline-block hidden" >
                        <Image src={arrowEven} alt="Workflow route" width={180} objectFit="contain"/>
                    </figure>
                    : pattern === 'odd' &&
                    <figure className="lg:inline-block hidden">
                        <Image src={arrowOdd} alt="Workflow route" width={180} objectFit="contain" />
                    </figure>
                    }
            </div>} 
            <div className={`${isWhite ? "text-white" : "text-black"} `}>
                {title && <h1 className="text-lg pb-4 font-semibold">
                    {title}
                </h1>}
                {text && <p className={`${isWhite ? "text-gray-100" : "text-gray-900"} text-base leading-loose`}>
                    {text}
                </p>}
                {btnText && <button className="mt-5 border-2 font-semibold bg-red-500 border-red-500 px-8 py-2.5 rounded-3xl text-white">{btnText}</button>}
            </div>
        </>
    )
}


export default FeatureDetails