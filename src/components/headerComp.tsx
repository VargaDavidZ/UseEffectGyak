
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style.css"
import kep from "/Screenshot-2018-03-29-13.49.53.png"


export function Header()
{
    return(
        <>
        
        <header className="container text-center">
        <img src={kep} alt="Természetvédelem" className="header-img"/>
        <h1>Védjük a környezetet!</h1>
        </header>

        
        </>
    )
}