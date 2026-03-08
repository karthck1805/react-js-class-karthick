import { Route, Routes } from "react-router-dom";
import Dashbord from "./compnets/pages/dashbord";
import Product from "./compnets/pages/product";
import Home from "./compnets/pages/home";
import CallBack from "./compnets/hooks/callBack";
import { PostData } from "./compnets/RESTAPI/postData";
import { GetData } from "./compnets/RESTAPI/getdata";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/product" element={<Product />} />
                <Route path="/home" element={<Home />} />
                <Route path="/callback" element={<CallBack />} />
                <Route path="/postdata" element={<PostData />} />
                <Route path="/getdata" element={<GetData />} />


            </Routes>
        </div>
    )
}

export default Routing;