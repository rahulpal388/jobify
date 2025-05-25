import kitchenCleaning from "../assets/kitchen-cleaning.jpg";
import { Button } from "../ui/button";

// 1. Define a TypeScript type for your service data
type Service = {
    id: number;
    image: string;
    title: string;
    description: string;
    rating: number;
    badge?: string;
};

// 2. Example services array
const services: Service[] = [
    {
        id: 1,
        image: kitchenCleaning,
        title: "Kitchen Cleaning",
        description:
            "Deep clean your kitchen with our trusted professionals. Includes appliances, counters, and more.",
        rating: 4.8,
        badge: "Popular",
    },
    {
        id: 2,
        image: kitchenCleaning,
        title: "Kitchen Cleaning",
        description:
            "Deep clean your kitchen with our trusted professionals. Includes appliances, counters, and more.",
        rating: 4.8,
        badge: "Popular",
    },
    {
        id: 3,
        image: kitchenCleaning,
        title: "Kitchen Cleaning",
        description:
            "Deep clean your kitchen with our trusted professionals. Includes appliances, counters, and more.",
        rating: 4.8,
        badge: "Popular",
    },
    {
        id: 4,
        image: kitchenCleaning,
        title: "Kitchen Cleaning",
        description:
            "Deep clean your kitchen with our trusted professionals. Includes appliances, counters, and more.",
        rating: 4.8,
        badge: "Popular",
    },
    // Add more services here as needed
];

// 3. ServiceSection component
export function ServiceSection() {
    return (
        <section className="px-4 md:px-12 mt-12 pb-24">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Popular Services
                </h1>
                <p className="text-center text-gray-500 text-sm mb-10">
                    Book trusted professionals for your home cleaning needs.
                </p>
            </div>
            <div className="mt-6 flex gap-8 justify-evenly flex-wrap">
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </section>
    );
}

// 4. ServiceCard component with props typing
type ServiceCardProps = Service;

function ServiceCard({
    image,
    title,
    description,
    rating,
    badge,
}: ServiceCardProps) {
    return (
        <div className="relative w-72 h-80  bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl group">
            {/* Image with overlay */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-40 w-full object-cover transition-opacity group-hover:opacity-95"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {badge && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
                        {badge}
                    </span>
                )}


            </div>
            {/* Card Content */}
            <div className="p-5 flex  flex-col h-40 justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
                    <p className="text-gray-600 text-sm mb-2">{description}</p>
                </div>
                <div className="flex items-center justify-between  ">
                    <div className="flex items-center text-yellow-500 text-sm font-semibold">
                        <span aria-label="star" role="img">
                            ★
                        </span>
                        <span className="ml-1">{rating}</span>
                    </div>
                    <Button
                        aria-label={`Book ${title}`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition px-4 py-2"
                        onClick={() => {
                            alert(`Booking requested for ${title}`);
                        }}
                    >
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
