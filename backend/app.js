const express = require('express');
var cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/products', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'Apples'
        },
        {
            id: 2,
            name: 'Oranges'
        },
        {
            id: 3,
            name: 'Bananas'
        },
        {
            id: 4,
            name: 'Carrots'
        },
        {
            id: 5,
            name: 'Pineapples'
        },
        {
            id: 6,
            name: 'Avocados'
        },
        {
            id: 7,
            name: 'Lettuce'
        }
    ]);
})

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
