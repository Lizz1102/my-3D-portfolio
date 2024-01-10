import React from "react";

import Sparkles from "../components/Sparkles";

const License = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Credits</h1>

            <div className="relative pb-10">
                <div>
                    <h2 className="text-2xl font-semibold mt-14 pb-8">
                        {" "}
                        Models
                    </h2>

                    <div className="text-slate-500">
                        <p>
                            Thank you sketchfab artists for creating these
                            incredible models and generously sharing them for
                            use:
                        </p>
                        <p className="mt-4">
                            Sander Vander Meiren - Stylised sky player home
                            dioroma
                        </p>
                        <p className="mt-4">Prof.v7x - Dragon White Low Poly</p>
                        <p className="mt-4">
                            Nicola Ristagno - Aircarft Biplane
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mt-14 pb-8">
                        Soundtrack
                    </h2>
                    <div className="text-slate-500">
                        <p>
                            Thank you Danny Cudd, Jack Rose and Simon Heyworth
                            for this beautiful mystical track:
                        </p>
                        <p className="mt-4">
                            Hang Massive (Album Luminous Emptiness) - The Secret
                            Kissing of the Sun and Moon
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative mt-2 mb-2">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mt-14 pb-8">
                    About Zaldrizes{" "}
                </h2>
                <p className="text-slate-500">
                    My dragon's name is Zaldrizes. The name is inspired by
                    Valyrian word for 'dragonfire' in Game of Thrones.
                </p>
                <p className="mt-4">
                    <Sparkles>
                        'Zaldrizes buzdari iksos daor' - 'A dragon is not a
                        slave'
                    </Sparkles>
                </p>
            </div>
        </section>
    );
};

export default License;
