const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123321',
    database:'sql'
})


//连接的状态
connection.connect((error) => {
    if(error){
        console.log('连接失败')
    }else{
        console.log('连接成功')
    }
})


//封装方法调用
module.exports = (sql,params=[]) => {
    return new Promise((resolve,reject)=>{
        connection.query(sql,params,(error,data) => {
            if(error){
                reject({msg:'error',error})
            }else{
                resolve({msg:'success',data})
            }
        })
    })
}