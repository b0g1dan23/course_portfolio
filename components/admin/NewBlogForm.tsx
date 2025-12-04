'use client';

import { createBlog, uploadImage } from "@/actions/blog";
import { JSONContent } from "@tiptap/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import BlogEditor from "./BlogEditor";
import Button from "../ui/Button";

const NewBlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState<JSONContent | null>(null);
    const [slug, setSlug] = useState('');
    const [isPending, startTransition] = useTransition();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files || !content) return;

        for (let i = 0; i < files.length; i++) {
            const url = await uploadImage(files[i]);
            content?.content!.push({ type: 'image', attrs: { src: url } });
        }
        setContent({ ...content });
    }

    function handleSave() {
        if (!title || !content || !slug) return;

        startTransition(async () => {
            await createBlog({ title, content: JSON.stringify(content), slug });
            router.push('/admin/blog');
        });
    }

    return (
        <div className="p-6! max-w-3xl mx-auto space-y-4!">
            <input
                placeholder="Title"
                className="border py-2! px-4! w-full rounded-md text-[1.6rem]"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <BlogEditor onChange={setContent} />

            <Button
                variant='secondary'
                onClick={() => fileInputRef.current?.click()}
                className="border px-4! py-2!"
            >
                Upload Images
            </Button>
            <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />

            <Button
                onClick={handleSave}
                disabled={isPending}
                className="bg-black text-white px-4! py-2!"
            >
                {isPending ? "Saving..." : "Publish"}
            </Button>
        </div>
    )
}
export default NewBlogForm