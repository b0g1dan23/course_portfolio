"use server"

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function handleFreebie(prev: any, formData: FormData) {
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
        return { error: "Please enter email address" };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!validateEmail(email)) {
        return { error: "Please enter a valid email address" };
    }

    return { success: true };
}