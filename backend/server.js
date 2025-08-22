import express from 'express';

const app = express();

// app.get('/',(req,res) => {
//     res.send('kya be na mane kru guddi laal')
// })

app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'kya bolti public'
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'kya bolti shimla ki public'
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'kya bolti hamirpur ki public'
        }
    ]
    res.send(jokes);

})

app.get('/login',(req,res) => {
    res.send('enter your user id')
})

app.get('/home',(req,res) => {
    res.send('<h1>nahi ho rha kya</h1>')
})

const port = process.env.PORT || 4000;

app.listen(port,() => {
    console.log(`serve at http://localhost:${port}`);
})