import ITailwindContainer from "./i-tailwind-container";

type ProfileCardProps = {
  data: ITailwindContainer;
};

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <img src={data.profilePicture} alt="Avatar do usuário" className="w-32 h-32 rounded-full mb-4"/>
      <h1 className="text-3xl font-bold">{data.username}</h1>
      <p className="text-gray-600">{data.biography}</p>
      <p className="text-sm text-gray-400 mt-2">{data.repositories} repositórios públicos</p>
      <a href={data.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 underline">Ver perfil no GitHub</a>
    </div>
  );
}
