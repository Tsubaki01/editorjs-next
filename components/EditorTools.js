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

export const EDITOR_TOOLS = {
  header: {
    class: HeaderWithAlignment,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  table: Table,
  code: Code,
  quote: Quote,
  delimiter: Delimiter,
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
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
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
    },
  },
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
      customPicker: true, // add a button to allow selecting any colour
    },
  },
};
