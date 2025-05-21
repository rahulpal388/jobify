import { useForm, type SubmitHandler } from "react-hook-form"



interface Inputs {
    email: String,
    password: String
}



export function Login() {
    const { handleSubmit, register } = useForm<Inputs>()


    const submit: SubmitHandler<Inputs> = (data) => { console.log(data) }
    return <>
        <div className="bg-gray-50 flex justify-center items-center h-screen ">
            <div className=" w-96 bg-gray-200 rounded px-6 py-4">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-900  text-center ">Welcome back</h1>
                    <p className=" text-gray-900 text-sm text-center mt-2  ">Enter you email and pasword to access you account</p>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit(submit)} className="flex flex-col justify-center ">
                        <div className="flex flex-col  ">
                            <label htmlFor="email" className="text-xl font-semibold" >Email</label>
                            <input type="text" className=" mt-2 outline-none py-[2px] px-1 rounded bg-white border border-black  " id="email" {...register("email", {
                                required: true
                            })} />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="outline-none py-[2px] px-1 rounded bg-white border border-black  " id="password" {...register("password", { required: true })} />
                        </div>
                        <div className="flex justify-end">
                            <a href="/" className="text-blue-600 underline cursor-pointer ">Forgot Your Password?</a>
                        </div>
                        <input type="submit" className="mt-4 bg-green-400 rounded px-4 py-2 cursor-pointer font-semibold " />

                    </form>
                </div>
                <div className="mt-4">
                    <p className="text-gray-900  text-center ">Don't Have An Account?<a className="text-blue-600 underline cursor-pointer " href="/register">Register Now</a></p>
                </div>
            </div>
        </div>
    </>
}