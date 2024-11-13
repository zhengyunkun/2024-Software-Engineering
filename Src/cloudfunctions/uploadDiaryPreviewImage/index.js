/* 
    函数: 上传手帐预览图
    @param event (event.item -> 记录的内容， event.collection -> 插入的表名称)
*/
const cloud = require('wx-server-sdk')

cloud.init({env: 'luojia1cloud-7gbweippb2dee1e5'})
const db = cloud.database()

exports.main = async (event, context) => {
  
  try{
    return await db.collection('diary').doc(event._id).update({
      data: {previewImageUrl: event.previewImageUrl }
    })
  }catch(e){
    console.log(e)
    return e
  }
}