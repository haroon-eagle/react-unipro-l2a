import {useState} from "react";

export function CommandButton(){
    // Premierement on initialise notre useState
    const [comment, setComment] = useState(0);

    //Ensuite on aura besoin d'une fonction qui va nous permettre de modifier la valeur initiale de notre state
    //Pour y arriver on utiliser la fonction setComment
    function handleComment(){
        setComment(comment + 1);
    }
    console.log("nombre de comment", comment)
    return(
        <>
            <button onClick={handleComment}>{comment} Like</button>
        </>
    )
}