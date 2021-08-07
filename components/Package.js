import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react'
import { PACKAGE_DATA } from '../helpers/Package';
import PackageCard from './PackageCard';
import SectionHeader from './SectionHeader';




function Package() {
    const { monthly, annual } = PACKAGE_DATA();

    const [selectedPlan, setSelectedPlan] = useState({
        0 : true
    })

    const btn_transition = {
        type: 'spring',
        bounce: 0.25,
        duration: 0.4
    }

    const plan_variant = (i) => {
        return {
            hidden: {
                x: '-30rem',
                opacity: 0,
            },
            vissible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.05 * i,
                    when: "beforeChildren",
                },
            },
        }
    }

    return (
        <section className="relative py-24 flex flex-col items-center" id='pricing'>
                <SectionHeader slogan="PRICING PLAN" text="Choose your pricing policy"/>
                <AnimateSharedLayout>
                <motion.div layout className="mt-10 mb-16 relative bg-gray-100 p-1.5 rounded-md">
                     <AnimatePresence>
                            {selectedPlan[0] ? <motion.button key="btn" layout layoutId="planBtn" transition={btn_transition} className="py-3 px-10 rounded-md bg-white text-base tracking-wide shadow-md font-semibold cursor-pointer">Monthly Plan</motion.button> : <span onClick={()=>setSelectedPlan({0 : true})} className="py-3 px-10 z-10 shadow-none rounded-md text-base tracking-wide font-semibold cursor-pointer">Monthly Plan</span >}
                           {selectedPlan[1] ? <motion.button key="btn" layout layoutId="planBtn" transition={btn_transition} className="py-3 px-10 rounded-md bg-white text-base tracking-wide shadow-md font-semibold cursor-pointer">Annual Plan</motion.button> : <span onClick={() => setSelectedPlan({ 1: true })} className="py-3 px-10 z-10 shadow-none rounded-md text-base tracking-wide font-semibold cursor-pointer">Annual Plan</span >}
                    </AnimatePresence>
                </motion.div>
            </AnimateSharedLayout>
            <div className="md:w-10/12 w-3/5 px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence>
                {selectedPlan[0] && monthly.map(item => {
                    return (
                                <motion.div key={item.id} variants={plan_variant(item.id)} animate="vissible" initial="hidden">
                                    <PackageCard {...item} />
                                </motion.div>
                        )
                })}
                </AnimatePresence>
                <AnimatePresence>
                    {selectedPlan[1] && annual.map(item => {
                        return (
                                    <motion.div  key={item.id} variants={plan_variant(item.id)} animate="vissible" initial="hidden">
                                        <PackageCard {...item} />
                                    </motion.div>
                        )
                    })}
                    </AnimatePresence>
            </div>
        </section>
    )
}

export default Package