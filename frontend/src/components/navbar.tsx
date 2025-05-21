import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";




export function NavBar() {
    const navigate = useNavigate();
    return <>
        <div className="flex px-10 py-3 justify-between items-center border border-b-[0.001px] border-gray-300 ">
            {/* logo */}
            <div >
                <a href="/"> <h1 className="text-2xl cursor-pointer text-gray-900 italic font-bold tracking-wide max-md:hidden "
                >Jobify</h1></a>

                <AlignJustify className="md:hidden size-6 cursor-pointer" />
            </div>

            <div className="flex gap-6 max-md:hidden ">
                <div  >
                    <h6 className="font-normal text-lg py-1 px-2 rounded text-gray-900 cursor-pointer hover:bg-gray-200 ">Home</h6>
                </div>
                <div>
                    <h6 className="font-normal text-lg  py-1 px-2 rounded text-gray-900 cursor-pointer hover:bg-gray-200">Service</h6>
                </div>
                <div>
                    <h6 className="font-normal text-lg  py-1 px-2 rounded text-gray-900 cursor-pointer hover:bg-gray-200">How it work</h6>
                </div>
                <div>
                    <h6 className="font-normal text-lg  py-1 px-2 rounded text-gray-900 cursor-pointer hover:bg-gray-200">Why Jobify</h6>
                </div>
            </div>
            <div>
                <Button name="Login" onClick={() => { navigate("/login") }} className="bg-emerald-600 hover:bg-emerald-700 text-white  " />
            </div>
        </div>
    </>
}