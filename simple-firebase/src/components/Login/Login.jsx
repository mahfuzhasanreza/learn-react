import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('hi');
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;