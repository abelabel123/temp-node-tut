// const amount = 12
// if (amount < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }
// console.log(`hey it's my first node app!!!`)
// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000)
// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)

// }

// sayHi('abel')
// sayHi(john)
// sayHi(peter)
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// console.log(data)

// sayHi('abel')
// sayHi(names.john)
// sayHi(names.peter)
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')

// // sayHi('abel')
// // sayHi(names.john)
// // sayHi(names.peter)
// const os = require('os')

// const user = os.userInfo()
// console.log(user)

// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalem: os.totalmem(),
//     freemem: os.freemem(),

// }
// console.log(currentOS)
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'content', 'subfolder','test.txt')
// console.log(absolute)
// const { readFileSync, writeFileSync} = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`,
//     { flag: 'a'}
// )
// console.log('done with this task')
// console.log('starting the next one')
// const { readFileSync, writeFileSync } =require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync('./content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//     { flag: 'a'}
// )

// console.log ('done with this task');
// console.log('starting the next one');


 const _ = require('lodash')

 const items = [1, [2, [3, [4]]]]
 const newItems = _.flattenDeep(items)
 console.log(newItems)