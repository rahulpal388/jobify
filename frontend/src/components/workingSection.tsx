import { Calendar, Check, MoveRight, Search, Wallet } from "lucide-react";


export function WorkingSection() {


    return <>
        <div className="pb-12">
            <div>
                <h1 className="text-center text-2xl text-gray-900 font-bold">How It Work</h1>
            </div>
            <div className="flex px-12 gap-6 max-lg:gap-4 max-md:gap-2 justify-center mt-12 items-center ">
                <div className="flex flex-col items-center gap-2  ">
                    <Search className="size-12 stroke-gray-900 max-lg:size-8 max-md:size-6  " />
                    <p className="text-xl max-lg:text-lg max-md:text-sm text-center">Select Service</p>
                </div>
                <MoveRight className="size-20 max-lg:size-10 stroke-1 stroke-green-900   " />
                <div className="flex flex-col items-center ">
                    <Calendar className="size-12 stroke-gray-900 max-lg:size-8 max-md:size-6" />
                    <p className="text-xl max-lg:text-lg max-md:text-sm text-center ">Schedule Service</p>
                </div>
                <MoveRight className="size-20 max-lg:size-10 stroke-1  stroke-green-900  " />
                <div className="flex flex-col items-center ">
                    <Check className="size-12 stroke-gray-900 max-lg:size-8 max-md:size-6 " />
                    <p className="text-xl max-lg:text-lg max-md:text-sm text-center">Service Delivered</p>
                </div>
                <MoveRight className="size-20 max-lg:size-10 stroke-1 stroke-green-900   " />
                <div className="flex flex-col items-center  ">
                    <Wallet className="size-12 stroke-gray-900 max-lg:size-8 max-md:size-6" />
                    <p className="text-xl max-lg:text-lg max-md:text-sm text-center ">Pay</p>
                </div>
            </div>
        </div>
    </>
}


