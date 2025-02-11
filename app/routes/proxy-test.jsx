import { useEffect, useState } from "react";
export default function ProxyTestPage() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("https://yourstore.myshopify.com/apps/test-proxy")
      .then((res) => res.json())
      .then((data) => setContent(data.htmlContent))
      .catch((err) => console.error("Error:", err));
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}