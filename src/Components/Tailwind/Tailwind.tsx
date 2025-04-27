import ITailwindContainer from "./ProfileCard/i-tailwind-container";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Tailwind() {
    const location = useLocation()
    const {username} = location.state || {}
    console.log(username.username)
    const [profile, setProfile] = useState({})

    let profileResponse = ""

    const fetchProfile = axios.get(`https://api.github.com/users/${username.username}`)
                                 .then((response) => profileResponse = response.data)
                                 .catch((e) => {
                                    console.log(e)
                                    alert(`Ocorreu o seguinte erro: ${e}`)
                                 })
    
    if (profileResponse != null) {
        setProfile({
            avatar : axios.get(profileResponse.avatar_url)
        })
    }

    const profileData : ITailwindContainer = {
        profilePicture : "",
        username : "Marcelolinho",
        biography : "adsadasdafdfdsggdsvlkç mvjlvn",
        profileUrl : "url",
        repositories : "abluble"
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="" id="login-container">
               <ProfileCard data={profileData} />
            </div>
        </div>
    )
}