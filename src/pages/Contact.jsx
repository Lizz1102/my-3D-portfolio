import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

//import { Fox } from "../models";
//import useAlert from "../hooks/useAlert";
//import { Alert, Loader } from "../components";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    //const { alert, showAlert, hideAlert } = useAlert();
    const [isLoading, setIsLoading] = useState(false);
    //const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = () => {};
    const handleBlur = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
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
                //showAlert("Message sent successfully!", "success");
                setIsLoading(false);
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log(error.text);
                //showAlert("Something went wrong!", "error");
                setIsLoading(false);
            });
    };

    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>

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
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
