import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const pageId = process.env.NOTION_PAGE_ID;

export default async function notionApi(req, res) {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });

  // const data = response.results.map(
  //   e => e.properties.Name.title[0]?.plain_text
  // );
  res.status(200).json(response.properties);
}
