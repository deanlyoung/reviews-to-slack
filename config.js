var appId = process.env.APP_ID;
var token = process.env.TOKEN;

var reviews = require('reviews-to-slack')
reviews.start({
  slackHook: 'https://hooks.slack.com/services/T02B47EJA/B7RLFQENS/' + token,
  appId: appId,
  channel: '#app-store-reviews',
  interval: 600
})
