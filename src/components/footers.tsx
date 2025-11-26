import * as icon from "lucide-react";

export function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-auto">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <icon.Twitter/>
                    </a>
                    <a>
                        <icon.Linkedin/>
                    </a>
                    <a>
                        <icon.Facebook/>
                    </a>
                </div>
            </nav>
            <aside>
                <p>{"Copyright ©"} {new Date().getFullYear()} {"- Tout droit réservé par Ordi'Simple"}</p>
            </aside>
        </footer>
    )
}

