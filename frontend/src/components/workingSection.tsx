import { Calendar, Check, MoveRight, Search, Wallet } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Select Service",
        description: "Choose from a wide range of trusted home services.",
    },
    {
        icon: Calendar,
        title: "Schedule Service",
        description: "Pick a convenient date and time.",
    },
    {
        icon: Check,
        title: "Service Delivered",
        description: "Our professionals complete your service reliably.",
    },
    {
        icon: Wallet,
        title: "Pay",
        description: "Pay securely after your service is done.",
    },
];

export function WorkingSection() {
    return (
        <section className="py-16 ">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                How It Works
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 px-4 md:px-16">
                {steps.map((step, idx) => (
                    <div
                        key={step.title}
                        className="relative flex flex-col items-center group md:w-56"
                    >
                        {/* Step Circle with Number */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            {idx + 1}
                        </div>
                        {/* Icon */}
                        <div className="mb-3">
                            <step.icon className="size-10 md:size-12 text-emerald-600 group-hover:scale-110 transition-transform" />
                        </div>
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-1">
                            {step.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 text-center text-sm md:text-base">
                            {step.description}
                        </p>
                        {/* Arrow/Connector */}
                        {idx < steps.length - 1 && (
                            <>
                                {/* Desktop: horizontal arrow */}
                                <div className="hidden md:block absolute top-1/2 right-[-32px]">
                                    <MoveRight className="size-8 text-emerald-400" />
                                </div>
                                {/* Mobile: vertical arrow */}
                                <div className="md:hidden flex flex-col items-center mt-3 mb-1">
                                    <MoveRight className="size-6 text-emerald-400 rotate-90" />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
