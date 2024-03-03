/* eslint-disable react/prop-types */
import { useState } from "react"

export function FollowCard ({ formatUserName, userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'sg-followCard-button is-following' 
        : 'sg-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="sg-followCard">
            <header className="sg-followCard-header">
                <img className="sg-followCard-avatar" alt="El avatar de sergupe" src={`https://unavatar.io/${userName}`} />
                <div className="sg-followCard-info">
                    <strong>{name}</strong>
                    <span className="sg-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="sg-followCard-text">{text}</span>
                    <span className="sg-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}