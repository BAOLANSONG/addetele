const Koa = require("koa")
const router = require("koa-router")()
const bodyParser = require("koa-bodyparser")
const query = require("./detafal/index")


const app = new Koa()


app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

//查询
router.get("/api/list",async ctx=>{
    let data = await query('select * from login')
    if(data.msg === "error"){
        ctx.body={
            code:0,
            msg:error
        }
    }else{
        ctx.body = {
            code:1,
            data
        }
    }
})

//增加数据
router.post("/api/addlist",async ctx=>{
    const {xuhao, time, title, name, zhongyao, yuedu, zhuang, edit}=ctx.request.body.id
    const data = await query("insert into login (xuhao, time, title, name, zhongyao, yuedu, zhuang, edit) values (?,?,?,?,?,?,?,?) ",[xuhao, time, title, name, zhongyao, yuedu, zhuang, edit])
    if(data.msg==="error"){
        ctx.body={
            code:0,
            mag:error
        }
    }else{
        ctx.body = {
            code:1,
            data
        }
    }
})


//删除数据
router.get("/api/detelelist",async ctx=>{
    const {id} = ctx.query
    const data = await query("delete from login where id=?",[id])
    if(data.msg==="error"){
        ctx.body={
            code:0,
            msg:error
        }
    }else{
        ctx.body={
            code:1,
            data
        }
    }
})

//改变数据
router.post("/api/editlist",async ctx=>{
    const {xuhao, time, title, name, zhongyao, yuedu, zhuang, edit,id} = ctx.request.body
    const data = await query('update login set xuhao=?, time=?, title=?, name=?, zhongyao=?, yuedu=?, zhuang=?, edit=? where id=?',[xuhao, time, title, name, zhongyao, yuedu, zhuang, edit,id])
    if(data.msg==="error"){
        ctx.body={
            code:0,
            msg:error
        }
    }else{
        ctx.body={
            code:1,
            data
        }
    }
})



app.listen(process.env.PORT || 3000,()=>{   
    console.log("服务启动成功！")
})