"use client"
import { FormEvent } from "react";

export default function RegisterForm(){
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await fetch("/api/auth/register",{
            method: "POST",
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            })
        });

        console.log(res);
    };
    return (
        <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button type="submit">Register</button>
            </form>
    );
}