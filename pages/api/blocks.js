
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const pageId = process.env.NOTION_PAGE_ID;

export default async function notionApi(req, res) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });

  const data = response.results.map(
    e => e.type === "paragraph" ? e.paragraph.text[0]?.plain_text : e.type  
  );
  res.status(200).json(data);
}