function Footer(){

    return(

        <footer className="bg-gray-950 text-gray-300 mt-10">
         {/* parent div inside footer */}
         <div className="mx-20">
            
                        <div className="px-5 py-10 grid md:grid-cols-4 gap-8">

                <div>

                    <h2

                        className="text-2xl font-bold"

                        style={{

                            background:"var(--brand-gradient)",
                            WebkitBackgroundClip:"text",
                            color:"transparent"

                        }}

                    >

                        Dev Stack

                    </h2>

                    <p className="mt-3 text-sm">

                        Create your own technology stack
                        with popular tools and frameworks.

                    </p>

                    <div className="flex gap-4 mt-4 text-sm">

                        <a className="hover:text-pink-500">

                            GitHub

                        </a>

                        <a className="hover:text-pink-500">

                            Twitter

                        </a>

                        <a className="hover:text-pink-500">

                            LinkedIn

                        </a>

                    </div>

                </div>

                <div>

                    <h3 className="text-white font-semibold mb-3">

                        Product

                    </h3>

                    <ul className="space-y-2 text-sm">

                        <li>
                            Technologies
                        </li>

                        <li>
                            Projects
                        </li>

                        <li>
                            Features
                        </li>

                        <li>
                            Pricing
                        </li>

                    </ul>

                </div>

                <div>

                    <h3 className="text-white font-semibold mb-3">

                        Company

                    </h3>

                    <ul className="space-buffer-2 text-sm">

                        <li>
                            About
                        </li>

                        <li>
                            Contact
                        </li>

                        <li>
                            Careers
                        </li>

                        <li>
                            Blog
                        </li>

                    </ul>

                </div>

                <div>

                    <h3 className="text-white font-semibold mb-3">

                        Legal

                    </h3>

                    <ul className="space-buffer-2 text-sm">

                        <li>
                            Privacy Policy
                        </li>

                        <li>
                            Terms
                        </li>

                        <li>
                            Security
                        </li>

                    </ul>

                </div>

            </div>

            <div className="border-t border-gray-800 py-4">

                <div className="px-5 flex justify-between text-sm">

                    <p>

                        © 2026 Dev Stack. All rights reserved.

                    </p>

                    <div className="flex gap-4">

                        <span>
                            Privacy
                        </span>

                        <span>
                            Terms
                        </span>

                    </div>

                </div>

            </div>
         </div>

        </footer>

    )

}

export default Footer;