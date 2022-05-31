import { NextPage } from "next/types";
import dynamic from "next/dynamic";
const DynamicResumeViewer = dynamic(
  () => import("src/components/ResumeViewer"),
  {
    ssr: false,
  }
);

import Frame from "src/components/Frame";

const Resume: NextPage = () => {
  return (
    <Frame title="My CV">
        <div>
            <button>A</button>
        </div>
      <DynamicResumeViewer />
    </Frame>
  );
};

export default Resume;
