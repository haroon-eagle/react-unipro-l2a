export function Products(props){
    return(
        <>
            <ul>Mon produit
                <li>Nom: {props.name}</li>
                <li>Categorie: {props.category}</li>
                <li>Prix: {props.prix}</li>
                <li>Quantité: {props.qty}</li>
            </ul>
        </>
    )
}