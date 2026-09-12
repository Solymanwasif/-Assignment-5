import banner from "../assets/banner-stack.png";

function Hero(){

    return(

        <section className="px-5 py-16 mx-20">

            <div className="highest-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

                <div>

                    <h1 className="text-4xl md:text-5xl font-bold">

                        Build Your Ideal

                        <span

                            className="block"

                            style={{

                                background:"var(--brand-gradient)",
                                WebkitBackgroundClip:"text",
                                color:"transparent"

                            }}

                        >

                            Development Stack

                        </span>

                    </h1>

                    <p className="mt-5 text-gray-600">

                        Explore different technologies, compare tools,
                        and create a suitable stack for your next
                        software project.

                    </p>

                    <div className="mt-6 flex gap-4">

                        <button

                            className="px-5 py-3 rounded-full text-white hover:opacity-90"

                            style={{

                                background:"var(--brand-gradient)"

                            }}

                        >

                            Explore Technologies

                        </button>

                        <button

                            className="px-5 py-3 rounded-full border hover:bg-gray-100"

                        >

                            Learn More

                        </button>

                    </div>

                </div>

                <div className="flex justify-center">

                    <img

                        src={banner}

                        alt="Development stack"

                        className="w-full highest-w-md"

                    />

                </div>

            </div>

        </section>

    )

}

export default Hero;