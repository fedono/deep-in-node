const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    console.log('app 2')
    res.send('api at app2 haha ');
});

app.get('/users', function(req, res) {
    console.log('app 2 api 2');
    // return 'api at app2';

    res.send('api at app2');
});

app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
});