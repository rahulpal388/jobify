import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom"; // Make sure React Router is installed

interface Inputs {
    email: string;
    password: string;
    username?: string;
}

export function AuthPage({
    type,
    onSubmit,
}: {
    type: "register" | "login";
    onSubmit: SubmitHandler<Inputs>;
}) {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-gray-50 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg px-8 py-8">
                {/* Back to Home */}
                <div className="mb-4">
                    <Link
                        to="/"
                        className="inline-flex items-center text-green-600 hover:text-green-800 transition text-sm font-medium"
                    >
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
                {/* Auth Card Content */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 text-center">
                        {type === "login" ? "Welcome Back" : "Create an Account"}
                    </h1>
                    <p className="text-gray-500 text-center mt-2">
                        {type === "login"
                            ? "Enter your email and password to access your account."
                            : "Enter username, email, and password to create an account."}
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 mt-8"
                    autoComplete="off"
                >
                    {type === "register" && (
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                autoComplete="username"
                                className={`mt-1 block w-full rounded border px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none ${errors.username ? "border-red-500" : "border-gray-300"
                                    }`}
                                {...register("username", {
                                    required: type === "register" ? "Username is required" : false,
                                    minLength: { value: 3, message: "Minimum 3 characters" },
                                })}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            className={`mt-1 block w-full rounded border px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete={type === "login" ? "current-password" : "new-password"}
                                className={`mt-1 block w-full rounded border px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Minimum 6 characters" },
                                })}
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                className="absolute right-3 top-2 text-gray-500 text-xs"
                                onClick={() => setShowPassword((s) => !s)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {type === "login" && (
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-blue-600 hover:underline text-xs"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-4 py-2 shadow transition disabled:opacity-60"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? type === "login"
                                ? "Logging in..."
                                : "Registering..."
                            : type === "login"
                                ? "Login"
                                : "Register"}
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-700">
                    {type === "login"
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <Link
                        className="text-blue-600 hover:underline"
                        to={type === "login" ? "/register" : "/login"}
                    >
                        {type === "login" ? "Register Now" : "Login"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
