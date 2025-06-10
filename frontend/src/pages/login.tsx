import axios from "axios";
import { AuthPage } from "../components/authPage"
import { useState } from "react";





export function Login() {
    const [response, setResponse] = useState(null);

    return <>

        <div>
            <AuthPage type="login" onSubmit={async (data) => {
                try {

                    const res = await axios.post("http://localhost:8080/user/login", data);
                    setResponse(res.data);
                } catch (error) {
                    console.error(error);
                }
            }} />
        </div>
    </>
}