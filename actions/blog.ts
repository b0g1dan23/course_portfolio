'use server';

import { createClient } from "@/lib/server";

interface BlogBody {
    title: string;
    content: string;
    slug: string;
}

export async function uploadImage(file: File) {
    const supabase = await createClient(true);

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage.from('blog-images').upload(fileName, buffer, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
    });

    if (error) {
        throw new Error(`Image upload failed: ${error.message}`);
    }

    const url = supabase.storage.from('blog-images').getPublicUrl(fileName).data.publicUrl;
    return url;
}

export async function createBlog(body: BlogBody) {
    const supabase = await createClient();

    const { title, content, slug } = body;
    const author_name = "bogdan@boge.dev";

    const { error } = await supabase.from('blogs').insert({
        title,
        content,
        slug,
        author_name,
    })

    if (error) {
        throw new Error(`Blog creation failed: ${error.message}`);
    }
}