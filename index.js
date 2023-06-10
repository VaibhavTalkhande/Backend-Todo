import express  from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1", {
    dbName:"baackend",
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const Message = mongoose.model("Message", messageSchema);
// Get the default connection
const port = 3000;
const users = [];
// Set the static folder
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
// Set the view engine to ejs
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
    }
);

app.get("/success", (req, res) => {
    res.render("success");
     
    }
);

app.post("/contact", async(req, res) => {
    const { name, email } = req.body;
    await Message.create({ name, email });

    
    res.redirect("/success");
    }

);
app.get("/users", (req, res) => {
    res.json(
        {
            users,
        }
    );
    
    }
);




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);

