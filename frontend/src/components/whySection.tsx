import { Button } from "../ui/button";
import kitchenCleaning from "../assets/kitchen-cleaning.jpg";
import maleElectrician from "../assets/male-electrical.jpg";
import peopleCleaningBuilding from "../assets/people-cleaning-building.jpg";

export function WhySection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="flex flex-col-reverse md:flex-row md:px-16 px-4 gap-12 justify-between items-center max-w-7xl mx-auto">
                {/* Left: Images */}
                <div className="flex items-center gap-8 w-full md:w-auto max-md:mt-12">
                    {/* Stacked images on desktop, single image on mobile */}
                    <div className="hidden md:flex flex-col gap-4 ">
                        <img
                            src={kitchenCleaning}
                            alt="Kitchen cleaning service"
                            className="h-52 w-96 object-cover rounded-xl shadow-md"
                            loading="lazy"
                        />
                        <img
                            src={maleElectrician}
                            alt="Male electrician at work"
                            className="h-32 w-32 object-cover rounded-xl shadow"
                            loading="lazy"
                        />
                    </div>
                    <div className="max-md:hidden">
                        <img
                            src={peopleCleaningBuilding}
                            alt="Team cleaning a building"
                            className="h-96 w-96 max-lg:h-80 max-lg:w-[33rem] max-xl:w-[28rem] object-cover rounded-xl shadow-lg"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-xl p-8 md:p-12 max-w-xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                        What is Jobify and Why Does It Exist?
                    </h1>
                    <p className="mt-5 text-lg text-gray-700 text-center">
                        <span className="font-semibold">Jobify</span> is an on-demand service platform that helps you hire verified local professionals for household tasks like plumbing, cleaning, and repairs — in just a few taps.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 text-center italic">
                        “Finding reliable help for everyday home tasks is frustrating — unverified workers, unreliable timing, and unclear pricing. <span className="font-semibold text-emerald-600">Jobify solves this.</span>”
                    </p>
                    <Button
                        aria-label="Book"
                        className="bg-emerald-600 mt-10 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition px-6 py-3 text-lg"
                        onClick={() => {
                            alert("Booking requested!");
                        }}
                    >
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
