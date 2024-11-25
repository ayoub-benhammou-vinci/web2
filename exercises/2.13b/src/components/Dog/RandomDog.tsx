import { useEffect, useState } from "react"

//Je met juste le Dog avec le message car seule ça m'intéresse
interface Dog {
    message : string, 
}

const RandomDog = () => {
    const [dogPicture, setDogPicture] = useState<Dog>();

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) =>{
            if(!response.ok) {
                throw new Error (`Fetch error ${response.status} : ${response.statusText}`);
            }
            return response.json();
        })
        .then((dog) => setDogPicture({
            message: dog.message ?? 'No picture for this dog'
        }))
    }, []);

    return (
        <div>
            <p><img src={dogPicture?.message} alt="image" /></p>
        </div>
    )
}

export default RandomDog;