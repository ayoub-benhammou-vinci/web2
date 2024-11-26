import { useEffect, useState } from "react"

//Je met juste le Dog avec le message car seule ça m'intéresse
interface Dog {
    message : string, 
}

const RandomDog = () => {
    const [dogPicture, setDogPicture] = useState<Dog>();


    useEffect(() => {
        fetchDog();

        
    },[]);

    const fetchDog = async() => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            if(!response.ok) {
                throw new Error (`Fetch error ${response.status} : ${response.statusText}`);
            }
            const dog = await response.json();
            setDogPicture(dog);
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    return (
        <div>
            <p><img src={dogPicture?.message} alt="image" /></p>
        </div>
    )
}

export default RandomDog;