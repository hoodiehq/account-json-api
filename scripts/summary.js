#!/usr/bin/env node

var fs = require('fs')

var _ = require('lodash')
var protagonist = require('protagonist')

var source = fs.readFileSync('./apiary.apib').toString()
var tree = protagonist.parseSync(source)

var pathNodes = _.flattenDeep(findNodes(has('attributes.href'), tree)).filter(Boolean)

pathNodes.forEach(function (pathNode, i) {
  var path = pathNode.attributes.href
  var methodNodes = _.flattenDeep(findNodes(has('attributes.method'), pathNode.content)).filter(Boolean)
  _.uniq(methodNodes, 'attributes.method').forEach(function (methodNode, j) {
    var method = methodNode.attributes.method
    console.log('%s %s', _.padEnd(method, 6), path)
  })
})

function has (property) {
  return function (object) {
    return _.has(object, property)
  }
}

function findNodes (check, content) {
  if (check(content)) {
    return content
  }

  if (Array.isArray(content)) {
    return content.map(findNodes.bind(null, check))
  }

  if (content.content) {
    return findNodes(check, content.content)
  }
}
