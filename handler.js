'use strict'

module.exports.hello = (event, context, callback) => {
  var userAgent = event.identity.userAgent
  console.log(userAgent)
  var MobileDetect = require('./node_modules/mobile-detect')
  var md = new MobileDetect(userAgent)
  var result
  var location = 'http://tarsanad.ddns.net/pennySaver/'
  switch (String(md.os())) {
    case 'iOS':
      location = 'https://itunes.apple.com/tw/app/%E7%9C%81%E8%91%97%E8%8A%B1/id1307850715?mt=8'
      break
    case 'AndroidOS':
      location = 'https://play.google.com/apps/testing/tw.org.itri.ccma.msb'
      break
  }
  result = "<meta http-equiv='refresh' content='0; url=" + location + "' />"
  context.succeed(result)
}
// Service Information
// service: serverless-admin
// stage: test
// region: ap-northeast-1
// api keys:
//   None
// endpoints:
//   GET - https://oebxas2id9.execute-api.ap-northeast-1.amazonaws.com/test/hello
// functions:
//   hello: serverless-admin-test-hello
