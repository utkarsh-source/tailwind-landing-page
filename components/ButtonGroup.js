import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

function ButtonGroup({ pause, play, next, prev }) {
    return (
        <>
            <button onClick={prev} className="border-none bg-opacity-0"><IoIosArrowRoundBack className=" hover:text-blue-500 text-gray-500 text-4xl"/></button>
            <button onClick={next} className="border-none bg-opacity-0"><IoIosArrowRoundForward className="text-gray-500 text-4xl hover:text-blue-500"/></button>
        </>
    )
}

export default ButtonGroup