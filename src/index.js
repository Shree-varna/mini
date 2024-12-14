const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const LogInCollection = require("./mongodb")
// const port = process.env.PORT || 5000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const public = path.join(__dirname, '../public')
const assets = path.join(__dirname, '../assets')
// console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(public))
app.use(express.static(assets))

// app.use(express.static(publicPath))


// // hbs.registerPartials(partialPath)
app.get('/', (req, res) => {
    res.render('index'); // Make sure 'index.hbs' exists in the 'templates' folder
});

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/courses', (req, res) => {
    res.render('courses')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/AI/:page', (req, res) => {
    const page = req.params.page; // Dynamically get the page name from the URL
    res.render(`AI/${page}`); // Render the corresponding file in the AI folder
});
app.get('/ADA/:page', (req, res) => {
    const page = req.params.page; // Dynamically get the page name from the URL
    res.render(`ADA/${page}`); // Render the corresponding file in the AI folder
});
app.get('/DS/:page', (req, res) => {
    const page = req.params.page; // Dynamically get the page name from the URL
    res.render(`DS/${page}`); // Render the corresponding file in the AI folder
});


app.post('/signup', async (req, res) => {
    
//     // const data = new LogInCollection({
//     //     name: req.body.name,
//     //     password: req.body.password
//     // })
//     // await data.save()

    const data = {
        name: req.body.name,
        password: req.body.password
    }

//     const checking = await LogInCollection.findOne({ name: req.body.name })

//    try{
//     if (checking.name === req.body.name && checking.password===req.body.password) {
//         res.send("user details already exists")
//     }
//     else{
         await LogInCollection.insertMany([data])
//     }
//    }
//    catch{
        res.render("index")
//    }

//     res.status(201).render("home", {
//         naming: req.body.name
//     })
 })


 app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            res.render("index")
            // res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }
        else {
            res.send("incorrect password")
        }
    } 
    catch {
        res.send("wrong details")
    }
})
app.listen(3000, () => {
    console.log('port connected');
})