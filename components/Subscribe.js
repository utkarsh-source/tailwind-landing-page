import Image from 'next/image';
import chat from '../assets/widget/chat.svg';
import community from '../assets/widget/community.svg';
import github from '../assets/widget/github.svg';

function Subscribe() {
    return (
        <section className="relative w-full flex flex-col items-center">
            <div className="md:w-3/4 w-11/12 relative flex flex-col items-center bg-red-400 md:px-20 px-8 py-16 rounded-xl">
                <h1 className="text-4xl font-semibold text-white">
                    Subscribe to our Blog
                </h1>
                <p className="text-lg py-10 text-gray-100 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing  elitsed eiusmod <br />tempor incididunt labore dolore.
                </p>
                <div className="w-full relative p-1 h-20 rounded-full overflow-hidden">
                    <input className="absolute z-10 w-full top-0 left-0 h-full  focus:outline-none pl-8 border-none placeholder-red-400 bg-white" type="text" placeholder="Enter your email address" />
                    <button className="relative text-lg z-20 ml-auto w-1/4 h-full grid place-content-center rounded-full bg-red-400 text-white ">Subscribe</button>
                </div>
            </div>
            <div className="md:w-3/4 w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16 relative">
                <div className="text-center w-full px-5">
                    <figure>
                        <Image src={chat} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className="text-lg font-semibold py-3">
                        Join the Community
                    </h1>
                    <p className="text-base text-gray-800" data-color="black">
                        Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
                <div className="text-center w-full px-5">
                    <figure>
                        <Image src={community} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className="text-lg font-semibold py-3">
                        Chat Communication
                    </h1>
                    <p className="text-base text-gray-800" data-color="black">
                        Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
                <div className="text-center w-full px-5">
                    <figure>
                        <Image src={github} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className="text-lg font-semibold py-3">
                        Github Access
                    </h1>
                    <p className="text-base text-gray-800"data-color="black">
                       Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Subscribe