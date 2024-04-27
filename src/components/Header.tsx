import { Link } from "react-router-dom"
import logomain from "../assets/logomain.jpg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header=()=>{
    return(
        <div className="border-b-2 border-b-orange-500 py-6 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src={logomain} alt="logo" className="h-12 rounded-lg" /> 
                    </Link>
                    
                    <Link  to="/" 
                        className="text-4xl font-bold tracking-tight text-orange-500 h-10%">
                         MunchIt.com    
                    </Link>
                </div>
                

                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </div>
    )
}
export default Header;