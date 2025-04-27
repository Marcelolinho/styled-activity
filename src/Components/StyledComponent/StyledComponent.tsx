import { useLocation, useNavigate } from "react-router-dom"; // importa navigate também!
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import IStyledContainer from "./ProfileComponent/i-styled-container";

export default function StyledComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    const { username } = location.state || {};
    const [profileData, setProfileData] = useState<IStyledContainer | null>(null);

    useEffect(() => {
        fetchProfile(username.username);
    }, [username, navigate]);

    const fetchProfile = async (user: string) => {
        try {
            const userResponse = await axios.get(`https://api.github.com/users/${user}`);
            const userData = userResponse.data;

            const avatarResponse = await axios.get(userData.avatar_url, { responseType: 'blob' });
            const avatarBlobUrl = URL.createObjectURL(avatarResponse.data);

            const profile: IStyledContainer = {
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
            <ProfileComponent data={profileData} />
        </div>
    );
}
