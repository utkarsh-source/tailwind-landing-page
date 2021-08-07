import Image from 'next/image';
import Logo from '../assets/logo.svg';
import { FaHeart } from 'react-icons/fa'

const nav = [
    "Home", "Adversite", "Supports", "Marketing", "Contact"
]

function Footer() {
    return (
        <footer className="flex flex-col items-center border-t-2 border-gray-200 py-16">
            <figure>
                <Image src={Logo} alt="logo" width={200} objectFit="contain" />
            </figure>
            <ul className="py-6 flex items-center sm:space-x-6 space-x-3">
                {nav.map((item, i) => {
                    return (
                        <li key={i} className="text-base hover:text-red-500 cursor-pointer font-medium">{item}</li>
                    )
                })}
            </ul>
            <p className="text-base w-max">
                Made with <FaHeart className="inline text-lg text-red-500 mx-1"/> by Utkarsh,
            </p>
        </footer>
    )
}

export default Footer