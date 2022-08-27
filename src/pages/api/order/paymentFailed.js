// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apipath } from "../apiPath";

export default async function handler(req, res) {
  const endpoint = req.headers.host.includes('localhost') ? process.env.NEXT_PUBLIC_PAYMENT_FAILURE_URL_LOCAL : process.env.NEXT_PUBLIC_PAYMENT_FAILURE_URL;
  if(req.method === "POST") {
    const {mihpayid, status, email, mode, txnid } = req.body;
    if(status === "failure") {
      // const order_id = txnid.split("-")[2];
      // const response = await fetch(`${apipath}/api/v1/order/payment_failure`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({order_id, email, mode, mihpayid}),
      // });
      // const jsonData = await response.json()
     res.writeHead(302, { Location: endpoint.replace("api/", "") }).end()
    }
  } else {
    res.writeHead(302, { Location: endpoint }).end()
  }
}