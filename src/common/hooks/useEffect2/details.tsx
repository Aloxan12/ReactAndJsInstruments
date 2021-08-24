import React from "react";


export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

type DetailsType = {
    userDetails: UserType | null
}

export const Details:React.FC<DetailsType> = ({userDetails, children}) => {
    return (
        <>
            <h2>Username</h2>
            {userDetails && <div>
                <img src={userDetails.avatar_url} alt={'Avatar'}/>
                <br/>
                {userDetails.login}, followers:{userDetails.followers}
            </div>}
        </>
    )
}
