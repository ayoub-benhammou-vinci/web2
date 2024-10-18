interface User {
    name: string,
    age: number
}

interface UsersCardsProps {
    usersCards: User[]
}

const UserCard = (props : UsersCardsProps) => {
    return (
        <div>
            {props.usersCards.map((userCard) => (
                <div>
                    <h2>{userCard.name}</h2>
                    <p>Age: {userCard.name}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard;

