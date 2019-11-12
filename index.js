const Koa = require("koa")
const router = require("koa-router")()
const bodyParser = require("koa-bodyparser")

const app = new Koa()

app.use(bodyParser())
// app.use(ctx=>{
//     ctx.body="你好 koa"
// })

app.use(router.routes())

router.get("/list",async ctx=>{
    ctx.response.body = "这是数据"
    console.log(1)
    console.log(ctx)

})

app.listen(process.env.PORT || 3000,()=>{   
    console.log("服务启动成功！")
})