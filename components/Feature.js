import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import { DATA } from '../helpers/Data';

function Feature() {
    return (
        <section id='features' className="flex flex-col items-center w-full pb-20 ">
            <SectionHeader slogan={"WHATS THE FUNCTION"} text={"Meet the feature of product"}/>
            <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-20">
                {DATA().feature.map((item) => {
                    return (
                        <div className="md:w-60 w-10/12 flex flex-col items-center text-center md:block md:text-left" key={item.id}>
                        <FeatureDetails {...item}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Feature