const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))

// it tells public repo is our assets.
app.use(express.static("public"))

// it renders login page.
app.get("/", (req,res)=> {
    res.render("login")
})
// it renders signup page.
app.get("/signup", (req,res)=> {
    res.render("signup")
})

// insert new user data when register.
app.post("/signup", async (req,res)=>{
    if (req.body.name === '' || req.body.herbalifeID === '' || req.body.email === '' || req.body.password === '') {
        res.send("please enter name");
        return;
    }
    else if (req.body.password !== req.body.confirmPassword) {
        res.send("password does not match");
        return;
    }
    else {
        const data= {
            name:req.body.name,
            ID:req.body.herbalifeID,
            email:req.body.email,
            password:req.body.password
        }
        await collection.insertMany([data])
        res.render("home")
    }
})

// check credentials for login.
app.post("/login", async (req,res)=>{
    try{
        const check=await collection.findOne({email:req.body.email})

        if(check.password===req.body.password) {
            res.render("home")
        }
        else {
            res.send("Wrong password")
        }
    }
    catch{
        res.send("Incorrect details")
    }
})

// confirming is the server started.
app.listen(3000,()=> {
    console.log("started")
})