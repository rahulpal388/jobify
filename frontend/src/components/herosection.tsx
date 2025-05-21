import { Button } from "../ui/button";
import cleaningServiceImg from "../assets/cleaning-service.png"

export function HeroSection() {


    return <>
        <div className="flex mt-12 md:px-12 px-4 xl:justify-evenly justify-between items-center ">
            <div className="flex flex-col justify-center items-center">
                <div className="p-4">
                    <h1 className=" text-4xl  text-gray-900 font-bold text-center ">Your Everyday Services, Just a Tap Away</h1>
                </div>
                <div>
                    <p className="text-sm text-center max-md:px-12 max-md:text-lg ">One app for all your service needs — electricians, cleaners, plumbers, and more.</p>
                </div>
                <Button name="Book Service" className=" mt-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold  rounded-lg shadow-md transition" onClick={() => { console.log("book servce now") }} />
            </div>
            {/* side image */}
            <div className="max-md:hidden">
                <img src={cleaningServiceImg} alt="img" className="h-[26rem] w-[32rem]  " />
            </div>
        </div>
    </>
}