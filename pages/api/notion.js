// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function notionApi(req, res) {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const data = response.results.map(e => e.properties.Name.title[0]?.plain_text);
  res.status(200).json(data);
}
