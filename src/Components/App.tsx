import {Header} from "./Header/Header.tsx";
import {Products} from "./Products/Products.tsx";
import {CommandButton} from "./Commandbutton/CommandButton.tsx";

// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export function App(){
    return(
        <>
            <Header  isLoggedIn={true}/>
            <Products name={"Veste"} prix={20000} category={"Habillement"} qty={15}/>
            <CommandButton/>
        </>

        //Si vous voulez tester les routes, il faut decommenter ce code si dessous et l'import qui est en haut du fichier
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Header isLoggedIn={true}/>} />
        //         <Route path="/products" element={<Products name={"Veste"} prix={20000} category={"Habillement"} qty={15} />} />
        //         <Route path="/commandbutton" element={<CommandButton />} />
        //     </Routes>
        // </Router>
    )
}