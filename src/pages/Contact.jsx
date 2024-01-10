import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import Dragon2 from "../models/Dragon2";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState(["stand"]);

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = () => setCurrentAnimation(["stand"]);
    const handleBlur = () => setCurrentAnimation(["stand"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation(["deaddown", "special", "stand"]);
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Liza",
                    from_email: form.email,
                    to_email: "kamrun.liza13@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then((result) => {
                console.log(result.text);

                setIsLoading(false);
                showAlert({
                    show: true,
                    text: "Message sent successfully!",
                    type: "success",
                });

                setTimeout(() => {
                    hideAlert();
                    setForm({ name: "", email: "", message: "" });
                }, [3000]);
            })
            .catch((error) => {
                setIsLoading(false);
                setCurrentAnimation("stand");
                console.log(error.text);
                showAlert({
                    show: true,
                    text: "Failed to send message!",
                    type: "danger",
                });
            });
    };

    return (
        <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
            {alert.show && <Alert {...alert} />}

            <div className="flex-grow min-w-[35%] flex flex-col">
                <h1 className="head-text pink-gradient_text">Get in Touch</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-7 mt-14"
                >
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="xyz@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="Let me know how I can help you!"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-pink"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            <div className="lg:w-full w-full lg:h-auto md:h-[650px] h-[450px]">
                <Canvas
                    camera={{
                        position: [0, 0, 6],
                        fov: 85,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Dragon2
                            setCurrentAnimation={setCurrentAnimation}
                            currentAnimation={currentAnimation}
                            position={[-1.5, -0.8, 1.5]}
                            rotation={[12.4, -0.6, 0]}
                            scale={[2, 2, 2]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
