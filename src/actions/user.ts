"use server"

import { connectToDatabase } from "@/database/connectDb";
import User from "@/models/Users";
import * as argon2 from 'argon2';
import { redirect } from "next/navigation";


export async function loginAction(formData: FormData): Promise<void> {
    const email: string | null = formData.get("email") as string;
    const password: string | null = formData.get("password") as string;

    if (email && password) {
        console.log({ email, password });
    } else {
        throw new Error('Email or password is missing');
    }
    redirect("/")
}


export async function registerAction(formData: FormData): Promise<void> {
    try {
        // Extract username, email, and password from Form Data
        const email = formData.get("email")
        const password = formData.get("password")
        const username = formData.get("username")

        if (typeof email !== 'string' || typeof password !== 'string' || typeof username !== 'string') {
            throw new Error('Invalid form data');
        }
        
        // Hash the password using argon2
        const hashedPassword = await argon2.hash(password);

        
        // connect to database
        connectToDatabase();
        
        // Create a new user document
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

    } catch (error) {
        console.error('Error during registration:', error);
        throw new Error('Failed to register user');
    }
}