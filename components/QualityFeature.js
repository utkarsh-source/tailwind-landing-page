import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import { DATA } from '../helpers/Data';


function QualityFeature() {
    return (
        <section className="flex flex-col items-center w-full pb-20">
            <SectionHeader slogan="QUALITY FEATURES" text="Amazing useful features"/>
            <div className="md:w-10/12 w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:p-20 p-4 pt-16 place-items-cente">
                {DATA().feature.map((item) => {
                    return (
                        <div className="relative flex w-ful" key={item.id}>
                            <FeatureDetails {...item} text="Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world."/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default QualityFeature