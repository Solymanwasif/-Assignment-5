import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App(){

    const [stack, setStack] = useState([]);

    return(

        <>

            <Navbar />

            <Hero />

            <div className="maximum-w-6xl mx-auto px-5 py-10 flex flex-col lg:flex-row gap-8">

                <div className="w-full lg:w-3/4">

                    <TechnologyList

                        stack={stack}

                        setStack={setStack}

                    />

                </div>

                <div className="w-full mt-15 lg:w-1/4">

                    <StackSidebar

                        stack={stack}

                        setStack={setStack}

                    />

                </div>

            </div>

            <Footer />

        </>

    )

}

export default App;