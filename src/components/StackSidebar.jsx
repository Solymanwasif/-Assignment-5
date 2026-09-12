import { toast } from "react-toastify";

function StackSidebar({stack, setStack}){

    const removeItem = (id)=>{

        const item = stack.find(
            tech => tech.id === id
        );

        const newStack = stack.filter(
            tech => tech.id !== id
        );

        setStack(newStack);

   if (item) {
    toast.info(item.name + " removed");
}

    };

    const removeAll = ()=>{

        setStack([]);

        toast.error(
            "Stack cleared"
        );

    };

    return(

        <aside className="border rounded-lg p-4 bg-white hover:shadow-md">

            <div className="flex justify-between mb-4">

                <h2 className="text-xl font-bold">

                    Your Stack

                </h2>

                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">

                    {stack.length}

                </span>

            </div>

            {
                stack.length === 0 ?

                <div className="text-center py-8">

                    <p className="text-gray-400">

                        Your stack is empty

                    </p>

                    <p className="text-sm text-gray-400 mt-2">

                        Add technologies to build your stack

                    </p>

                </div>

                :

                <div>

                    {
                        stack.map(item=>(

                            <div

                                key={item.id}

                                className="border rounded-lg p-3 mb-3 flex justify-between items-center hover:bg-gray-50"

                            >

                                <div className="flex items-center gap-3">

                                    <img

                                        src={item.icon}

                                        alt={item.name}

                                        className="w-8 h-8"

                                    />

                                    <div>

                                        <h3 className="font-semibold">

                                            {item.name}

                                        </h3>

                                        <p className="text-sm text-gray-500">

                                            {item.category}

                                        </p>

                                    </div>

                                </div>

                                <button

                                    onClick={()=>removeItem(item.id)}

                                    className="text-red-500 hover:bg-red-100 px-2 rounded"

                                >

                                    ✕

                                </button>

                            </div>

                        ))
                    }

                    <button

                        onClick={removeAll}

                        className="w-full border border-red-300 text-red-500 py-3 rounded-lg hover:bg-red-50"

                    >

                        REMOVE ALL

                    </button>

                </div>

            }

        </aside>

    )

}

export default StackSidebar;