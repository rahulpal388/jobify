import { Button } from "../ui/button"
import kitchenCleaning from "../assets/kitchen-cleaning.jpg"
import maleElectrician from "../assets/male-electrical.jpg"
import peopleCleaningBuilding from "../assets/people-cleaning-building.jpg"

export function WhySection() {

    return <>
        <div className="flex md:px-16 px-4 gap-12 justify-between pb-24 mt-12 ">
            <div className="flex items-center gap-8 max-md:hidden ">
                <div className="flex flex-col gap-4">
                    <img src={kitchenCleaning} alt="" className="h-52 w-96  rounded" />
                    <img src={maleElectrician} alt="" className="h-32 w-32 rounded" />
                </div>
                <div>
                    <img src={peopleCleaningBuilding} alt="" className="h-96 w-96 max-lg:h-80 max-lg:w-[33rem] max-xl:w-[28rem] rounded " />

                </div>
            </div>
            <div className=" flex flex-col items-center  ">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 text-center ">What Jobify is and Why it exists</h1>
                </div>
                <div >
                    <p className="mt-3 text-lg text-center px-12 max-md:px-4 ">Jobify is an on-demand service platform that helps you hire verified local professionals for household tasks like plumbing, cleaning, and repairs — in just a few taps</p>
                </div>
                <div>
                    <p className="mt-3 text-lg text-center px-12  max-md:px-4  ">“Finding reliable help for everyday home tasks is frustrating — unverified workers, unreliable timing, and unclear pricing. Jobify solves this.</p>
                </div>
                <div>
                    <Button name="Book Service" className=" mt-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold  rounded-lg shadow-md transition" onClick={() => { console.log("book servce now") }} />
                </div>
            </div>
        </div>
    </>
}