'use client'
import { useState } from "react";


const ContactMe = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            // "https://email-sender-j0c5.onrender.com"
            const res = await fetch(`/api/contact-me`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                setSuccess("Thanks for Reaching out, I'll Get back in 24 hours!");
                setForm({ name: "", email: "", message: "" });
                
                 setTimeout(() => setSuccess(null), 5000);
            } else {
                setErrorMessage(data?.error || "Something went wrong");
                 setTimeout(() => setErrorMessage(null), 5000);
            }
        } catch (err) {
            setErrorMessage("Failed to send message. Try again later.",);
            setTimeout(() => setErrorMessage(null), 5000);
            console.log(err)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="pt-8">
                <p>
                    {success && (
                        <p className="text-md text-green-600 font-semibold text-right px-3">{success}</p>
                    )}
                </p>
                <p>
                    {errorMessage && (
                        <p className="text-red-600 font-semibold px-3 text-right">{errorMessage}</p>
                    )}
                </p>
                <div className="flex justify-center items-center lg:h-[83.5vh] h-[100vh] bg-[#4e60fd] mt-4 rounded-ss-[127px] px-2 py-4" id="contact">
                    <div className="text-center text-white max-w-xl w-full ">
                        <h4 className="text-3xl font-bold mb-4">Contact Me</h4>
                        <p className="mb-8 text-xl">
                            If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it!
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Write your message here"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-white text-[#4e60fd] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                            >
                                {loading ? "Sending..." : "Get In Touch"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;
