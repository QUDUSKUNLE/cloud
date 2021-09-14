const moment = require('moment');

exports.helloHTTP = (req, res) => {
  res.status(200).json({
    time: moment().format('MMM DDD YYYY, h:mm:ss a')
  })
}

exports.helloPubSub = (event, context) => {
  console.log(`Hello PubSub ${moment().format('MMM DDD YYYY, h:mm:ss a')}`)
}

exports.helloStorage = (event, context) => {
  console.log(`Hello Storage ${moment().format('MMM DDD YYYY, h:mm:ss a')}`)
}
