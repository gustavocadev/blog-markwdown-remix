import styles from "highlight.js/styles/github-dark-dimmed.css";
import { LinksFunction, Outlet } from "remix";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};
export default function Blog() {
    return (
        <section className=" flex justify-center">
            <article className="prose lg:prose-xl py-10">
                <Outlet />
            </article>
        </section>
    );
}
