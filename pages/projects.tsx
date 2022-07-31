import type { NextPage } from "next";
import Image from "next/image";
import Frame from "../src/components/Frame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import fetchContent from "../src/utils/fetchContent";
import ReactMarkdown from "react-markdown";
import { Project } from "src/utils/interfaces";

const Projects = (props: { projectsContent: Project[] }) => {
    const projects = props.projectsContent;
    return (
        <Frame title="Projects">
            {projects.map((proj: Project) => (
                <Project
                    key={proj.href}
                    title={proj.title}
                    body={proj.body}
                    img={proj.img}
                    href={proj.href}
                    gitRef={proj.gitRef}
                    blogRef={proj.blogRef}
                    stack={proj.stack}
                />
            ))}
        </Frame>
    );
};

const Project = (props: Project) => {
    return (
        <div className="text-lg inline-block lg:mb-4">
            <div className="my-3 mb-3 text-2xl font-semibold dark:text-slate-200 lg:text-3xl">
                {props.title}
            </div>
            <a href={props.href} target="_blank" rel="noreferrer">
                <div className="w-5/12 float-left mr-2 mt-2 mb-1 md:mb-5 md:mr-4 lg:h-full lg:mb-3">
                    <Image
                        width={640}
                        height={640}
                        className="rounded-xl"
                        src={props.img}
                        alt="Project image"
                        loading="eager"
                    />
                </div>
            </a>
            <div className="text-md  overflow-clip md:text-xl lg:text-2xl lg:h-72">
                <ReactMarkdown>{props.body}</ReactMarkdown>
            </div>

            <div className={`${props.stack.length > 3 ? "block" : "flex"} clear-both`}>
                {/* stack info */}
                {props.stack.length > 0 && (
                    <div
                        className={`flex flex-wrap ${
                            props.stack.length > 1 ? "place-content-around" : ""
                        } px-5 space-x-7 clear-both`}
                    >
                        {props.stack.map((item) => {
                            if (item.length > 0) {
                                return (
                                    <img
                                        className="h-7 my-2"
                                        alt={`${item} icon`}
                                        src={`/icon/${item}.svg`}
                                    />
                                );
                            }
                        })}
                    </div>
                )}

                {/* link buttons */}
                <div className="ml-auto mr-0 my-2">
                    {props.blogRef && (
                        <a
                            href={props.blogRef}
                            target="_blank"
                            rel="noreferrer"
                            className="underline font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-purple-400"
                        >
                            Read more
                        </a>
                    )}
                    <a href={props.href} target="_blank" rel="noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-green-700 text-white font-bold py-2 px-3 rounded float-right mr-1 mb-2">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} width="25" />
                        </button>
                    </a>

                    {props.gitRef && (
                        <a href={props.gitRef} target="_blank" rel="noreferrer">
                            <button className="bg-slate-900 hover:bg-red-900 text-white font-bold py-2 px-3 rounded mr-2 mb-2 float-right">
                                <FontAwesomeIcon icon={faGithub} width="25" />
                            </button>
                        </a>
                    )}
                </div>
            </div>

            <hr className="clear-both" />
        </div>
    );
};

export const getStaticProps = async () => {
    const revalidation = parseInt(process.env.NEXT_PUBLIC_REVALIDATION || "60");
    let projectsContent: Project[];

    let fetchedContent: any = await fetchContent(
        "projects",
        "title, body, img, href, gitref, blogref, stack"
    );

    if (fetchedContent) {
        projectsContent = fetchedContent.map((proj: any) => {
            return {
                title: proj.title,
                body: proj.body,
                img: proj.img,
                href: proj.href,
                gitRef: proj.gitref,
                blogRef: proj.blogref,
                stack: proj.stack.split(",").map((item: string) => item.trim()),
            };
        });
        return {
            props: {
                projectsContent,
            },
            revalidate: revalidation,
        };
    }
};

export default Projects;
