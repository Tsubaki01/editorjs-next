import React, { memo, useEffect, useMemo } from "react";
type Props = {
  code: string;
};
const CodeRenderer = ({ code }: Props) => {
  const [lang, ...body] = code.split("\n");
  const language = lang.slice(1);
  const other = body.join("\n");

  return (
    <pre>
      <code className={`language-${language}`}>{other}</code>
    </pre>
  );
};

export default memo(CodeRenderer);
