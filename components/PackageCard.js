import { AnimatePresence, motion } from 'framer-motion';



const point_variant = {
    initial: {
        x: "-10rem",
        opacity: 0,
    },
    vissible: {
        x: 0,
        opacity: 1,
    }
}

function PackageCard(props) {
    return (
        <div className="p-5 min-h-full flex flex-col relative border-2 border-gray-200 hover:shadow-2xl rounded-md">
            <h1 className="text-xl font-semibold pb-4">{props.name}</h1>
            <p className="text-base">{props.description}</p>
            <motion.div className="py-8" transition={{staggerChildren: 0.05, delayChildren: 0.1}} animate="vissible" initial="initial" >
                {props.points.map(item => {
                    return (
                        <motion.div className="flex items-center py-1.5" key={item.id} variants={point_variant} >
                            <item.icon className="text-red-500 mr-3 text-2xl " />
                            <span className="text-base">{item.text}</span>
                        </motion.div>
                    )
                })}
            </motion.div>
            <div className="flex items-center justify-center pb-10">
                <span className="text-xl font-semibold pr-1">{props.priceWithUnit}</span>/Monthly
            </div>
            <button className="self-center w-max border-2 font-semibold bg-red-500 border-red-500 px-8 py-2.5 rounded-3xl text-white">
                {props.buttonText}
            </button>
            {props.anotherOption && <h2 className="text-center py-6 text-base font-semibold text-blue-600">{props.anotherOption}</h2>}
        </div>
    )
}

export default PackageCard