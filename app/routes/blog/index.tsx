import { Link, useLoaderData } from "remix";
import * as firstPost from "./first-post.mdx";
import * as secondPost from "./second-post.mdx";

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ""),
        ...mod.attributes.meta,
    };
}

export function loader() {
    return [postFromModule(firstPost), postFromModule(secondPost)];
}

export default function index() {
    const posts = useLoaderData();
    return (
        <div>
            <h1>List of articles</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                        {post.description && (
                            <p className="m-0 lg:m-0">{post.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
