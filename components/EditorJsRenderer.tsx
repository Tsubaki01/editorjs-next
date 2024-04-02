import { BlockToolData, OutputBlockData, OutputData } from "@editorjs/editorjs";
import React from "react";
import CodeRenderer from "./CodeRenderer";
import Blocks from "editorjs-blocks-react-renderer";

type Props = {
  data: OutputData;
};
type ParsedContent = string | JSX.Element;

const EditorJsRenderer = ({ data }: Props) => {
  // time が未定義の場合はデフォルト値として現在のタイムスタンプを使用
  const safeData = {
    ...data,
    time: data.time || Date.now(),
    version: data.version || "",
  };

  return (
    <div className="prose max-w-full ">
      <Blocks data={safeData} />
    </div>
  );
};

export default EditorJsRenderer;
