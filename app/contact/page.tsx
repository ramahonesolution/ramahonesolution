"use client";
import React, { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // placeholder: handle submit (send to API or email)
        console.log("submit", form);
    }

    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-600 tracking-tight">Send Your Message!</h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Got a question or proposal, or just want to say hello? Go ahead.</p>

                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="block">
                            <span className="text-sm text-gray-500">Your Name</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="mt-2 w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-indigo-600 outline-none py-2 text-gray-900 dark:text-gray-100"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm text-gray-500">Email Address</span>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                className="mt-2 w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-indigo-600 outline-none py-2 text-gray-900 dark:text-gray-100"
                            />
                        </label>

                        <label className="block md:col-span-2">
                            <span className="text-sm text-gray-500">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi, I think we need a design system..."
                                rows={6}
                                className="mt-2 w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-indigo-600 outline-none py-3 text-gray-900 dark:text-gray-100 resize-y"
                            />
                        </label>
                    </div>

                    <div className="mt-10">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium tracking-widest hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                        >
                            <span>SHOOT</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}