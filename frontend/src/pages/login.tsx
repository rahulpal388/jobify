import { AuthPage } from "../components/authPage"





export function Login() {

    return <>

        <div>
            <AuthPage type="login" onSubmit={(data) => console.log(data)} />
        </div>
    </>
}