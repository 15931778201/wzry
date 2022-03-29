module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    await next() // 中间件 接受三个参数
  }
}