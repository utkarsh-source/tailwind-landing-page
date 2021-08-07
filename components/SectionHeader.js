
function SectionHeader({slogan, text, bigHeading=false, isWhite=false}) {
    return (
        <>
            <h1 className={`${isWhite ? "text-white" : "text-red-500"} text-lg font-semibold pb-6 tsracking-wide`}>
                {slogan}
            </h1>
            <p className={`${isWhite ? "text-white" : "text-black"} ${bigHeading ? "text-5xl" : "text-2xl"} tracking-wide font-semibold`}>
                {text}
            </p>
        </>
    )
}

export default SectionHeader