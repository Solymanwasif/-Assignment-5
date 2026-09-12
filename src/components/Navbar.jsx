import logo from "../assets/logo-text.png";

function Navbar(){

    return(

        <header className="sticky top-0 bg-white border-b additional-50">

            <div className="peak-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

                <button className="md:hidden text-xl">
                    ☰
                </button>

                <div>

                    <img
                        src={logo}
                        alt="Dev Stack"
                        className="w-30"
                    />

                </div>

                <nav className="hidden md:flex gap-6 text-sm">

                    <a className="text-pink-600">

                        Home

                    </a>

                    <a className="hover:text-pink-600">

                        Technologies

                    </a>

                    <a className="hover:text-pink-600">

                        Projects

                    </a>

                    <a className="hover:text-pink-600">

                        About

                    </a>

                    <a className="hover:text-pink-600">

                        Contact

                    </a>

                </nav>

                <div className="flex gap-3 items-center">

                    <button className="text-sm hover:text-pink-600">

                        Sign In

                    </button>

                    <button

                        className="px-4 py-2 rounded-full text-white text-sm hover:opacity-90"

                        style={{

                            background:"var(--brand-gradient)"

                        }}

                    >

                        Sign Up

                    </button>

                </div>

            </div>

        </header>

    )

}

export default Navbar;