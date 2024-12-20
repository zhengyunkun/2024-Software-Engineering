/*
    加载所有有效的寻找驴友贴
*/
const cloud = require('wx-server-sdk')

cloud.init({env: 'luojia1cloud-7gbweippb2dee1e5'})
const db = cloud.database()


exports.main = async (event, context) => {
  // 按发布时间逆序，返回有效期内有效的驴友贴
  try{
    return await db.collection('searchFriend').orderBy('timestamp', 'desc').where({
      expired: false
    }).get()
  }catch(e){
    console.log(e)
    return e
  }
}