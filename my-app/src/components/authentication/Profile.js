import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css"

const Profile = () =>{
    const {user} = useAuth0();
    return (
        <>
            {user?.picture && <img src={user.picture} alt={user?.name} className="picture"/>}
            <h2>{user?.name}</h2>
            <ul>
                {Object.keys(user).map((objKey,i) => <li key={i}>{objKey}:{user[objKey]}</li>)}
            </ul>
        </>
    )
}

export default Profile