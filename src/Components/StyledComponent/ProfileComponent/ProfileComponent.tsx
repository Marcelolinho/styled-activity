import styled from "styled-components";
import IStyledContainer from "./i-styled-container";

// Estilos com styled-components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

const Username = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
`;

const Biography = styled.p`
  color: #4B5563;
  text-align: center;
  margin-top: 0.5rem;
`;

const Repositories = styled.p`
  color: #9CA3AF;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ProfileLink = styled.a`
  margin-top: 1rem;
  color: #3B82F6;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

type ProfileCardProps = {
  data: IStyledContainer;
};

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <Card>
      <Avatar src={data.profilePicture} alt="Avatar do usuário" />
      <Username>{data.username}</Username>
      <Biography>{data.biography}</Biography>
      <Repositories>{data.repositories} repositórios públicos</Repositories>
      <ProfileLink href={data.profileUrl} target="_blank" rel="noopener noreferrer">
        Ver perfil no GitHub
      </ProfileLink>
    </Card>
  );
}
