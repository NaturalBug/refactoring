import { statement, htmlStatement } from './statement/statement.js'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
var invoices = require('./statement/invoices.json')
var plays = require('./statement/plays.json')
console.log(statement(invoices, plays))
console.log(htmlStatement(invoices, plays))
