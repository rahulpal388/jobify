import { Button } from "../ui/button";
import cleaningServiceImg from "../assets/cleaning-service.png";

export function HeroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between md:px-12 px-4 mt-12 xl:justify-evenly gap-10">
            {/* Left: Content */}
            <div className="flex flex-col justify-center items-center md:items-start max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left leading-tight">
                    Your Everyday Services, <br className="hidden md:block" />
                    Just a Tap Away
                </h1>
                <p className="mt-4 text-lg text-gray-600 text-center md:text-left">
                    One app for all your service needs — electricians, cleaners, plumbers, and more.
                </p>
                <Button
                    aria-label="Book"
                    className="bg-emerald-600 mt-8 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg transition px-6 py-3 text-lg"
                    onClick={() => {
                        alert("Booking requested!");
                    }}
                >
                    Book Now
                </Button>
            </div>
            {/* Right: Image */}
            <div className="flex-shrink-0 max-md:mb-8 max-md:hidden">
                <img
                    src={cleaningServiceImg}
                    alt="Professional cleaning service"
                    className="h-[22rem] w-auto md:h-[26rem] md:w-[32rem] object-contain drop-shadow-xl rounded-xl"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
