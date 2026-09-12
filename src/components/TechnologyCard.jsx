import { toast } from "react-toastify";

function TechnologyCard({tech, stack, setStack}){

    const added = stack.some(
        item => item.id === tech.id
    );

    const addStack = ()=>{

        if(added){

            toast.warning(
                "Already added to stack"
            );

            return;

        }

        setStack([
            ...stack,
            tech
        ]);

        toast.success(
            tech.name + " added to stack"
        );

    };

    return(

        <div className="border rounded-lg p-5 bg-white hover:shadow-lg transition">

            <div className="flex justify-between items-center">

                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">

                    <img

                        src={tech.icon}

                        alt={tech.name}

                        className="w-8 h-8"

                    />

                </div>

                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">

                    {tech.badge}

                </span>

            </div>

            <h3 className="text-xl font-bold mt-4">

                {tech.name}

            </h3>

            <p className="text-gray-600 text-sm mt-3">

                {tech.description}

            </p>

            <div className="flex gap-2 mt-4">

                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">

                    {tech.category}

                </span>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">

                    {tech.difficulty}

                </span>

            </div>

            <p className="mt-3 text-sm">

                ⭐ {tech.rating}

            </p>

                    <button

                        onClick={addStack}

                        disabled={added}

                        className="mt-5 w-full py-2 rounded-lg text-white hover:opacity-90"

                        style={{

                            background: added
                            ? "#9ca3af"
                            : "var(--brand-gradient)"

                        }}

                    >

                        {
                            added
                            ? "✓ Added to Stack"
                            : "Add to Stack"
                        }

                    </button>

        </div>

    )

}

 export default TechnologyCard;