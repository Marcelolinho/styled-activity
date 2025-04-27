import ITailwindContainer from "./i-tailwind-container"

export default function ProfileCard({data} : {data : ITailwindContainer}) {
    return (
        <div className="flex flex-col justify-center items-center flex-wrap bg-gray-300" id="card-container">
            <img src={data.profilePicture} alt="pfpic" />
            <p>{data.username}</p>
            <p>{data.biography}</p>
            
            <a href={data.profileUrl} className=""></a>
        </div>
    )
}