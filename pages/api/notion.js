// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default function notionApi(req, res) {
  notion.databases
    .query({
      database_id: databaseId,
    })
    .then(response =>
      response.results.map(e => e.properties.Name.title[0]?.plain_text)
    )
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).send({message: "Произошла ошибка"}))
}
