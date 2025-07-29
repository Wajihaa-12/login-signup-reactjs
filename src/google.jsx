import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase"
import { useNavigate } from "react-router-dom";

function Google(){
const navigate = useNavigate();
    function googleLogin(){
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async(result)=>{
console.log(result);
if(result.user){
navigate("/welcome", {
  state: {
    name: result.user.displayName,
    email: result.user.email,
    photo: result.user.photoURL,
  },
});
setTimeout(() => {
    alert("Login Successful!");
}, 1000);
}
    });
    }
    return(
        <div>
<p className="mt-6 text-center text-sm text-gray-500">Or continue </p>
<div className="flex justify-center cursor-pointer">
    
    <img src="/google.png" alt="google logo" width={210} onClick={googleLogin}/>
</div>
        </div>
    );
}
export default Google;