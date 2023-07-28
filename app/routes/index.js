const router = require('express').Router();
const QRCode = require('qrcode');

router.get('/',(req,res,next)=>{
	res.render('index');
})


router.post('/make',(req,res,next)=>{
	const text = req.body.text;
	
	QRCode.toDataURL(text, (err, url) => {
    const data = url.replace(/.*,/, "");
    const img = new Buffer.from(data, "base64");

     res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": img.length
    }); 
    res.end(img);
  });
})

module.exports = router;