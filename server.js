var express = require('express');
var AV = require('leanengine');
const path = require('path')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'fHlQK5K3zQdGFO0h4jPg7Azk-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'Tpz60WuMnnBGJGh3hr6os321',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'gf5hWN1qI2XreblTMLNB80TP'
});

var app = express();
app.use(AV.express());
app.use(express.static(path.resolve(__dirname, './dist')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'))
})
app.listen(process.env.LEANCLOUD_APP_PORT);
console.log('Server started')
