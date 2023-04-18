import skills from "./data.json";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(res: NextApiResponse, req: NextApiRequest) {
  return res.json(skills);
}
