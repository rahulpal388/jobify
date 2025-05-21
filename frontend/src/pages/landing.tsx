import { HeroSection } from "../components/herosection";
import { NavBar } from "../components/navbar";
import { WhySection } from "../components/whySection";



export function LandingPage() {

    return <>
        <div className="bg-gray-50">
            <NavBar />
            <HeroSection />
            <WhySection />
        </div>
    </>
}