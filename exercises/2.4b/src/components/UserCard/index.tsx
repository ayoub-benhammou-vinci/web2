import "./UserCard.css"

interface UserCardProps {
    name : string;
    age : number;
    isOnline : boolean
}

//props.isOnline : 1er cas pour le CSS et le deuxième cas pour l'affichage
const UserCard = (props : UserCardProps) => {

    return (
        <div>

            <div> 
                <h2>Nom : {props.name}</h2>
            </div>

            <div>
                <p>Age : {props.age}</p>
            </div>
            <div className={props.isOnline ? "online" : "offline"}> {props.isOnline ? "En ligne" : "Hors ligne" }</div>
        </div>

    )
}

export default UserCard;

