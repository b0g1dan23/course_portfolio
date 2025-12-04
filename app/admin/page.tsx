import Button from "@/components/ui/Button"

const page = () => {
    return (
        <div className="container">
            <h1>Admin page</h1>
            <Button href="/admin/blog/new">Add new blog</Button>
        </div>
    )
}
export default page