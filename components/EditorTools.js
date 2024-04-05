import Code from "@editorjs/code";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import HeaderWithAlignment from "editorjs-header-with-alignment";
import Paragraph from "editorjs-paragraph-with-alignment";
import ToggleBlock from "editorjs-toggle-block";
import Checklist from "@editorjs/checklist";
import NestedList from "@editorjs/nested-list";
import ColorPlugin from "editorjs-text-color-plugin";
import Embed from "@editorjs/embed";

export const EDITOR_TOOLS = {
  header: {
    class: HeaderWithAlignment,
    inlineToolbar: true,
    config: {
      placeholder: "へッダー",
      levels: [1, 2, 3, 4],
      defaultLevel: 1,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  embed: Embed,
  code: Code,
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "テキストを入力",
      captionPlaceholder: "キャプションを入力",
    },
  },
  delimiter: Delimiter,
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  // Marker: {
  //   class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
  //   config: {
  //     defaultColor: "#FFBF00",
  //     type: "marker",
  //   },
  // },
  // Color: {
  //   class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
  //   config: {
  //     colorCollections: [
  //       "#EC7878",
  //       "#9C27B0",
  //       "#673AB7",
  //       "#3F51B5",
  //       "#0070FF",
  //       "#03A9F4",
  //       "#00BCD4",
  //       "#4CAF50",
  //       "#8BC34A",
  //       "#CDDC39",
  //       "#FFF",
  //     ],
  //     defaultColor: "#FF1300",
  //     type: "text",
  //     customPicker: true, // add a button to allow selecting any colour
  //   },
  // },
};
