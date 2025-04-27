import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard/ProfileCard";
import ITailwindContainer from "./ProfileCard/i-tailwind-container";

export default function TailWind() {
    const location = useLocation();
    const { username } = location.state || {};

    const [profileData, setProfileData] = useState<ITailwindContainer | null>(null);

    useEffect(() => {
        if (username) {
            fetchProfile(username);
        }
    }, [username]);

    const fetchProfile = async (username: string) => {
        try {
            const userResponse = await axios.get(`https://api.github.com/users/${username.username}`);
            const userData = userResponse.data;

            const avatarResponse = await axios.get(userData.avatar_url, { responseType: 'blob' });
            const avatarBlobUrl = URL.createObjectURL(avatarResponse.data);

            const profile: ITailwindContainer = {
                profilePicture: avatarBlobUrl,
                username: userData.login,
                biography: userData.bio,
                profileUrl: userData.html_url,
                repositories: userData.public_repos,
            };

            setProfileData(profile);

        } catch (e) {
            console.error("Erro ao buscar perfil:", e);
            alert(`Ocorreu o seguinte erro: ${e}`);
        }
    };

    if (!profileData) {
        return <div>Carregando perfil...</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <ProfileCard data={profileData} />
        </div>
    );
}
