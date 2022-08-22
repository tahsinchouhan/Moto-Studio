// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  if(req.method === "POST") {
    res.writeHead(302, { Location: 'https://www.chhattisgarhherbals.org/order/paymentFailed' }).end()
  } else {
    res.writeHead(302, { Location: 'https://www.chhattisgarhherbals.org/order/paymentFailed' }).end()
  }
}
