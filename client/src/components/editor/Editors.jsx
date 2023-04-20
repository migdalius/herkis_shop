import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const Editors = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  );
};

export default Editors;
