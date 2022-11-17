import wtf from "wtf_wikipedia";
import summary from "wtf-plugin-summary";
import classify from "wtf-plugin-classify";
import markdown from "./wtf-plugin-markdown/src/index.js";
import image from "wtf-plugin-image";

import { writeFile } from "node:fs/promises";
import YAML from "yaml";

wtf.extend(summary);
wtf.extend(markdown);
wtf.extend(image);
wtf.extend(classify);

const res = await wtf.fetch("Operation_Barkhane");

const articles = res.links().map((link) => link.page());
const secondRun = [];
for (const article of articles) {
  const res = await wtf.fetch(article).catch((e) => console.error(e));
  if (
    !res ||
    !/(military)|(battle)|(war)|(conflict)/gi.test(res.classify()?.type)
  ) {
    console.log("\x1b[31m", res?.classify().type, res?.title());
    continue;
  }
  console.log("\x1b[32m", res.url());

  secondRun.push(res.links().map((link) => link.page()));
  const doc = new YAML.Document();
  let summary = [0].map((i) => res.sentence(i)?.text() ?? "").join(" ");

  try {
    summary = res.summary();
  } catch (e) {
    console.error(e);
  }
  doc.contents = {
    infoboxes: res.infoboxes().map((infobox) => infobox.json()),
    title: res.title(),
    shortDescription: res.summary(),
    description: [0, 1, 2].map((i) => res.sentence(i)?.text() ?? "").join(" "),
    author: "Wikipedia",
    img: res.mainImage()?.commonsURL(),
  };

  const result = await writeFile(
    `output/syria/${res.title()?.toLowerCase().replaceAll(" ", "_")}.md`,
    `---
${doc.toString()}---

${res
  .markdown({ infoboxes: false, links: false, references: false })
  .replaceAll("width=300", "")}`
  );
}
