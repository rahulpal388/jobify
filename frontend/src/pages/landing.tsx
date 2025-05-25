import { Feature } from "../components/feature";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/herosection";
import { NavBar } from "../components/navbar";
import { ServiceSection } from "../components/serviceSection";
import { WhySection } from "../components/whySection";
import { WorkingSection } from "../components/workingSection";



export function LandingPage() {

    return <>
        <div className="bg-gray-50">
            <NavBar />
            <HeroSection />
            <ServiceSection />
            <WhySection />
            <WorkingSection />
            {/* <Feature /> */}
            <Footer />
        </div>
    </>
}