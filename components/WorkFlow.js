import {WORKFLOW_DATA } from '../helpers/WorkFlow';
import FeatureDetails from './FeatureDetails';
import SectionHeader from './SectionHeader';
import pattern from '../assets/patternBG.png';
import Image from 'next/image';

function WorkFlow() {
    return (
        <section className="relative w-full p-2 bg-blue-900 py-16 flex flex-col items-center">
            <figure className="absolute top-0 left-0 w-full">
                <Image src={pattern} alt="Workflow" layout="responsive" objectFit="contain"/>
            </figure>
            <SectionHeader isWhite slogan="WHATS THE FUNCTION" text="Let’s see how it works"/>
            <div className="py-16 px-10 relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-content-center">
                {WORKFLOW_DATA().map(item => {
                    return (
                        <div key={item.id}>
                            <FeatureDetails {...item} isWhite/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WorkFlow
