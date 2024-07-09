// app/page.js
import React from "react";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Financial Services",
};

function Page() {
  const slug = "finance";

  // Construct the path to the JSON file
  const filePath = path.join(process.cwd(), "app/services/5/", `${slug}.json`);

  // Read the JSON file synchronously
  const fileContents = fs.readFileSync(filePath, "utf8");
  const postData = JSON.parse(fileContents);

  return (
    <section id="services" className="services">
      <header className="section-header">
        <p>{postData.title}</p>
      </header>
      <p>Author: {postData.author}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </section>
  );
}

export default Page;
