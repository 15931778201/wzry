const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  title: {
    type: String
  },
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  scores: {
    difficult: {
      type: Number
    },
    skills: {
      type: Number
    },
    attack: {
      type: Number
    },
    survive: {
      type: Number
    }
  },
  skills: [{
    icon: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    tips: {
      type: String
    },
  }],
  item1: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  item2: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  usageTips: {
    type: String
  },
  battleips: {
    type: String
  },
  teamTips: {
    type: String
  },
  partterns: [{
    hero: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Hero'
    },
    description: {
      type: String
    }
  }]
})
// 数据库集合转换为复数形式   
module.exports = mongoose.model('Hero', Schema, 'heroes')