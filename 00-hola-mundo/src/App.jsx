/* eslint-disable react/jsx-key */
import './App.css'
import { FollowCard } from './FollowCard'

const users = [
    {
        userName: 'sergupe',
        name: 'Sergio Gutiérrez Pérez',
        initialIsFollowing: true
    },{
        userName: 'alguya',
        name: 'Alberto Gutiérrez Yanes',
        initialIsFollowing: true
    },{
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        initialIsFollowing: false
    }
]

export function App () {
    const format = (userName) => `@${userName}`

    return(
        <section className='App'>
            {
                users.map(user => {
                    return (
                        <FollowCard
                            key={user.userName} 
                            formatUserName={format}
                            {...user}
                        />
                    )
                })
            }
        </section>
    )
}