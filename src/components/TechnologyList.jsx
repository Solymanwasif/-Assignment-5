import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import technologiesData from "../data/technologies.json";

function TechnologyList({stack, setStack}){

    const [technologies, setTechnologies] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{

            setTechnologies(technologiesData);

            setLoading(false);

        },500);

    },[]);

    return(

        <section>

            <h2 className="ml-20 text-3xl font-bold mb-6">

                Explore Technologies

            </h2>

            {
                loading ?

                <div className="ml-20 text-center py-16 border rounded-lg">

                    <h2 className="text-xl">

                        Loading Technologies...

                    </h2>

                </div>

                :

                <div className="ml-20 grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                    {
                        technologies.map(tech=>(

                            <TechnologyCard

                                key={tech.id}

                                tech={tech}

                                stack={stack}

                                setStack={setStack}

                            />

                        ))
                    }

                </div>

            }

        </section>

    )

}

export default TechnologyList;