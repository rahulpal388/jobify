import axios from "axios";
import { AuthPage } from "../components/authPage";
import { useState } from "react";


export function Register() {
    const [response, setResponse] = useState(null);
    return <>
        <div>
            <AuthPage
                type="register"
                onSubmit={async (data) => {
                    try {
                        const res = await axios.post("http://localhost:8080/user/register", data);
                        setResponse(res.data);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            />
        </div>
    </>
}