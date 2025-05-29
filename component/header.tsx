import NavBar from "./navbar";
import Profil from "./profil";

const Header = () => {
    return ( 
        <div className="h-full bg-[#FAF8F4] z-1">
            <NavBar/>
            <Profil/>
        </div>
     );
}
 
export default Header;