const express=require('express')

const app=express()
//Example 1: Simple Custom Middleware (Logger)
// const myLogger=function(req,res,next){
//     console.log('LOGGED');
//     next();
// }
// app.use(myLogger)


//Example 2: Authentication Custom Middleware
// function isAuthenticated(req,res,next){
//     if (req.headers.token===12345) {
//         next();
//     } else {
//         res.status(401).send("Unauthorized");
//     }
// }
// app.get("/dashboard",isAuthenticated,(req,res)=>{
//     res.send("Welcome to Dashboard");
// });
// Only authorized users can access /dashboard.


// Example 3: Route-Level Custom Middleware
// function checkAge(req,res,next){
//     if (req.query.age>=18) {
//         next();
//     }else{
//         res.status(403).send("ACCESS DENIED")
//     }
// }
// app.get("/movie",checkAge,(req,res)=>{
//     res.send("MOVIE ALLOWED")
// })

// app.get("/",(req,res)=>{
//     res.send("HELLO WORLD");
// })
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})


app.listen(3000,()=>{
    console.log(`app is running on port ${3000}`);
    
})