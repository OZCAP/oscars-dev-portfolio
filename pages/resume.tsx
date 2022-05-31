import { NextPage } from "next/types";
import dynamic from "next/dynamic";
const DynamicResumeViewer = dynamic(
  () => import("src/components/ResumeViewer"), { ssr: false }
);

import Frame from "src/components/Frame";

const Resume: NextPage = () => {
  return (
    <Frame title="My CV">
      <p className="mx-auto w-fit text-base opacity-75">Resume type</p>
        <div className="flex flex-row p-5 place-content-evenly">
            <button className="font-bold border px-3 py-1 rounded-lg hover:drop-shadow-sm hover:bg-gray-50 break">Fullstack</button>
            <button className="font-bold border px-3 py-1 rounded-lg hover:drop-shadow-sm hover:bg-gray-50">Frontend</button>
            <button className="font-bold border px-3 py-1 rounded-lg hover:drop-shadow-sm hover:bg-gray-50">Backend</button>
        </div>
      {/* <DynamicResumeViewer /> */}
    </Frame>
  );
};

export default Resume;
