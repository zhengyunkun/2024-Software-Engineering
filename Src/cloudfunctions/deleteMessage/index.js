const cloud = require('wx-server-sdk')

cloud.init({env: 'luojia1cloud-7gbweippb2dee1e5'})
const db = cloud.database()
exports.main = async (event, context) => {
  console.log("delete_id"+event.guide_id)
  try{
    
      return await db.collection('message').where({
        guide_id: event.guide_id
      }).remove().then(res=>{
      console.log(res)
    })
  }catch(e){
    console.log(e)
    return e
  }
}