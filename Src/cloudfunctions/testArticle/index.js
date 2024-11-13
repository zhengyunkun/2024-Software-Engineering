// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env: 'luojia1cloud-7gbweippb2dee1e5'})
const db = cloud.database() 
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  var data = {
    title: "新文章一则",
    content: "内容",
    time: new Date(),
    timestamp: new Date()
  }
  return await db.collection('article').add({
    data: data,
  })
}