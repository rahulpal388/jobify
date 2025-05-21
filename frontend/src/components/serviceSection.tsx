import kitchencleaning from "../assets/kitchen-cleaning.jpg"
import { Button } from "../ui/button"

export function ServiceSection() {

    return <>
        <div className="px-12 pb-24  ">
            <div className="">
                <h1 className="text-3xl font-bold text-gray-900 text-center  ">Popular Services</h1>

            </div>
            <div className="mt-12 flex gap-4 justify-evenly flex-wrap ">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    </>
}



function ServiceCard() {
    return <>
        <div className="relative">
            <img src={kitchencleaning} className="h-64 w-64 opacity-80 rounded-sm " />
            <div className="absolute bottom-2 left-0 w-full  ">
                <h1 className="text-center text-2xl font-semibold text-gray-900   ">Kitchen Cleaning</h1>
                <div className="flex justify-center mt-2">
                    <Button name="Book Service" className="  bg-emerald-600 hover:bg-emerald-700 text-white font-semibold  rounded-lg shadow-md transition" onClick={() => { console.log("book servce now") }} />
                </div>
            </div>

        </div>
    </>
}