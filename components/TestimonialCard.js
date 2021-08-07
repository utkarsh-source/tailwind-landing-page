import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

function TestimonialCard(props) {

    return (
        <div className="p-8 border-2 border-gray-200 rounded-lg hover:shadow-lg mx-auto w-9/12 min-h-full">
            <ul className="flex space-x-3 pb-5">
                {[0,1,2,3,4].map(item => {
                    return (
                        <motion.li key={item} data-color={props.review - item >= 1 && true}>
                            <FaStar className="text-lg text-red-600"/>
                        </motion.li>
                    )
                })}
            </ul>
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="py-7">{props.description}</p>
            <div className="flex items-center">
                <figure className="rounded-full w-16 h-16 relative overflow-hidden">
                    <Image src={props.avatar} alt={props.name} layout="fill"/>
                </figure>
                <div className="ml-4">
                    <p className="text-lg font-semibold pb-0.5">{props.name} </p>
                    <p className="text-red-500">{props.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard