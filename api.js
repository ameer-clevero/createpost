const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');

app.post('/add', (req, res) => {
    let newtitle = req.body["title"];
    let newcontent = req.body["content"];
    fs.readFile('src/assets/posts.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.posts.push({
                id: new Date().getTime(),
                title: newtitle,
                content: newcontent
            });
            json = JSON.stringify(obj);
            fs.writeFile('src/assets/posts.json', json, 'utf8', callback);
        }
    });
    callback = () => {
        res.send({
            result: "Done"
        });
    }

});

app.post('/delete', (req, res) => {
    let key = req.body["id"];
    fs.readFile('src/assets/posts.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj = obj.posts;
            let i = 0;
            obj.forEach(element => {
                if (element.id == key) {
                    obj.splice(i, 1);
                }
                i++;
            });
            json = JSON.stringify(obj);
            json = '{"posts":' + json + '}';
            fs.writeFile('src/assets/posts.json', json, 'utf8', callback);
        }
    });
    callback = () => {
        res.send({
            result: "Done"
        });
    }
});
app.listen(3208);