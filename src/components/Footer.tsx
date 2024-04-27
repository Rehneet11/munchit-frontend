import logomain from "../assets/logomain.jpg"
const Footer=()=>{
    return(
        <div className="bg-slate-900 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span>
            <div className="flex items-center gap-3">
                <img src={logomain} alt="logo" className="h-12 rounded-lg" /> 
                <span className="text-3xl text-white font-bold tracking-tight">
                    MunchIt.com
                </span>
            </div> 
            </span>
            <span className=" text-white font-bold tracking-tight flex gap-4" >
                <span>Privacy Policy </span>
                <span>Terms And Conditions</span>
            </span>
        </div>
    </div>
    )
}
    

export default Footer;