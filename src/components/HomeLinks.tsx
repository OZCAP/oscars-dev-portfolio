import { LinkData } from "../utils/interfaces";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HomeLinks = (props: { loading: boolean; links: Array<LinkData> }) => {
    const loading = props.loading;
    const links = props.links;

    return (
        <AnimatePresence>
            {!loading &&
                links.map((link: LinkData) => {
                    const isBlog = link.href.includes("blog");
                    return (
                        <motion.div
                            key={link.text}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 1.05, color: "#475569" }}
                            transition={{
                                duration: 0.5 + links.indexOf(link) / 7,
                                type: "spring",
                                damping: 10,
                                stiffness: 300,
                            }}
                        >
                            {/* choose <a> or <Link> based off link being internal or external */}
                            {link.href.includes(":") ? (
                                <a href={link.href} target={isBlog ? "" : "_blank"}>
                                    <div
                                        className="text-slate-300 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer select-none"
                                        style={{ transition: "color 0.5s ease" }}
                                    >
                                        {link.text}
                                    </div>
                                </a>
                            ) : (
                                <Link href={link.href} passHref>
                                    <div
                                        className="text-slate-300 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer select-none"
                                        style={{ transition: "color 0.5s ease" }}
                                    >
                                        {link.text}
                                    </div>
                                </Link>
                            )}
                        </motion.div>
                    );
                })}
        </AnimatePresence>
    );
};

export default HomeLinks;
