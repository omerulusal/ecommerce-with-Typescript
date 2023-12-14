import LoginClient from "../components/auth/LoginClient"
import { getCurrentUser } from "../actions/getCurrentUser"
const Login = async () => {
    const currentUser: any = await getCurrentUser()
    return (
        <div>
            <LoginClient currentUser={currentUser} key={currentUser?.id} />
        </div>
    )
}

export default Login