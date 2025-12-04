'use client';

import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { createClient } from "@/lib/client";
import { useRouter } from "next/navigation";

const AdminForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading(true)
        setError("")

        const { error } = await createClient().auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        router.push('/admin');
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-150 mx-auto! grid gap-4 border p-6! rounded-lg mt-10!">
            <div className="flex flex-col gap-2 items-start">
                <label className="font-bold" htmlFor="email">Email:</label>
                <input type="text"
                    id="email"
                    className="border border-white py-4! px-6!
                                    rounded-lg w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-2 items-start">
                <label className="font-bold" htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    className="border border-white py-4! px-6!
                    rounded-lg w-full"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="text-red-400 mt-2!">{error}</p>}
            <Button type="submit" className="mt-8">
                {loading ? "Logging in..." : "Login"}
            </Button>
        </form>
    )
}
export default AdminForm