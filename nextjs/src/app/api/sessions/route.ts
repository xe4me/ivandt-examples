
const secretKey = process.env.IVANDT_SECRET_KEY;

import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  let response
  try {
    response = await fetch("https://api.ivandt.com/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        endUserId: "some-user-id-for-tracking",
        endUserEmail: "john-doe@gmail.com",
        expiresIn: 3600,
      }),
    });
  }catch (e) {
    console.error('ERROR ',e);
  }
  if(response){
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }else{
    return new Response(JSON.stringify({failed:true}), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
