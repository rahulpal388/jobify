import { AuthPage } from "../components/authPage";


export function Register() {
    return <>
        <div>
            <AuthPage type="register" onSubmit={(data) => { console.log(data) }} />
        </div>
    </>
}