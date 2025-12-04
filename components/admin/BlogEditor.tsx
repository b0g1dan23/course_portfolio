"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import type { JSONContent } from "@tiptap/core";
import { useRef, useState } from "react";
import { uploadImage } from "@/actions/blog";

interface BlogEditorProps {
    onChange: (content: JSONContent) => void;
}

export default function BlogEditor({ onChange }: BlogEditorProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [StarterKit, Image, Link, Underline],
        content: "",
        onUpdate({ editor }) {
            onChange(editor.getJSON());
        },
    });

    async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files || !editor) return;

        setUploading(true);

        try {
            const urls = await Promise.all(
                Array.from(files).map(file => uploadImage(file))
            );

            urls.forEach(url => {
                if (url) editor.chain().focus().setImage({ src: url }).run();
            });
        } catch (err) {
            console.error("Image upload failed:", err);
        } finally {
            setUploading(false);
        }
    }


    return (
        <div className="border rounded p-4 space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 border-b pb-2">
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className="border px-2! py-1! rounded"
                >
                    Bold
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className="border px-2! py-1! rounded"
                >
                    Italic
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleUnderline().run()}
                    className="border px-2! py-1! rounded"
                >
                    Underline
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleStrike().run()}
                    className="border px-2! py-1! rounded"
                >
                    Strike
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBulletList().run()}
                    className="border px-2! py-1! rounded"
                >
                    Bullet List
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                    className="border px-2! py-1! rounded"
                >
                    Numbered List
                </button>
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="border px-2! py-1! rounded"
                >
                    {uploading ? "Uploading..." : "Upload Image"}
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageSelect}
                />
            </div>

            {/* Editor */}
            <EditorContent editor={editor} className="prose max-w-full" />
        </div>
    );
}
