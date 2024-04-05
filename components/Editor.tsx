import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
// @ts-ignore
import DragDrop from "editorjs-drag-drop";
// @ts-ignore
import Undo from "editorjs-undo";
import { EDITOR_I18N } from "./EditorI18n";

//props
type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

const Editor = ({ data, onChange, holder }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        i18n: EDITOR_I18N,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
        hideToolbar: false,
        onReady: () => {
          new DragDrop(editor);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full" />;
};

export default memo(Editor);
