import Appimg2 from "../assets/Appimg2.jpeg"
import { Link } from "react-router-dom"
import Appdownloadimg from "../assets/Appdownloadimg.png"
const HomePage=()=>{
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-slate-200 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-800">
                    Delievery at your Doorstep in Minutes
                </h1>
                <span className="text-xl text-slate-600">Order Now For Best Deals</span>
            </div>

            <div className="bg-white p-10 rounded-lg" >
                <div className="grid md:grid-cols-2 gap-5">
                    <img src={Appimg2} alt="" className="w-auto h-auto max-h-[400px] mx-auto flex  items-center rounded-lg"/>
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <span className="font-bold text-3xl tracking-tighter text-slate-800">
                            Order Now for Exclusive Deals
                        </span>
                        <span>
                            Download the App for 100Rs Off on First Order
                        </span>
                        <Link to="/">
                        <img src={Appdownloadimg} alt="" />
                        </Link>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;