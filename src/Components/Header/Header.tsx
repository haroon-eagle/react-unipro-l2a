import './style.css';
export function Header(props){
    return(
        <>
            {/*Pour appliquer du style dans notre code on utilise le mot clé classname + la classe css*/}
            <h1 className="test">Bienvenue dans la boutique</h1>

            {/*Là on a utilisé des conditions ternaires appliquer une condition dans notre props isLoggedIn*/}
            <h2>{props.isLoggedIn ? "Connecté" : "Non connecté"}</h2>
        </>
    )
}