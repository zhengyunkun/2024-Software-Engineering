// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env: 'luojia1cloud-7gbweippb2dee1e5'})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let openid = cloud.getWXContext().OPENID
  let entrys = await db.collection('message').where({
    target_id: openid,
  }).get()
  return await db.collection('user').where({
    openid: openid
  }).update({
    data: {
      message_count: entrys.data.length,
    }
  })
}