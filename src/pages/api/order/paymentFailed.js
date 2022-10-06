export default async function handler(req, res) {
  const endpoint = req.headers.host.includes("localhost")
    ? process.env.NEXT_PUBLIC_PAYMENT_FAILURE_URL_LOCAL
    : process.env.NEXT_PUBLIC_PAYMENT_FAILURE_URL;
  if (req.method === "POST") {
    const { status } = req.body;
    if (status === "failure") {
      res.writeHead(302, { Location: endpoint.replace("api/", "") }).end();
    }
  } else {
    res.writeHead(302, { Location: endpoint }).end();
  }
}
