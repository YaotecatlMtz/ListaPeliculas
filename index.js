const express = require('express');
const movieRoutes = require('./routes');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

app.use('', movieRoutes);


app.get('', (req, res)=>{
    res.send('working do!');
});

const mongoURL = 'mongodb+srv://ADMIN:Passw0rd@test.28pfy9x.mongodb.net/Todos?retryWrites=true&w=majority'

mongoose.connect(mongoURL).then(()=>{
    app.listen(3000, ()=>{
        console.log('Si se pudo chaval');
    });
}).catch(err=>{
    console.log('fijate que no se pudo mijo', err);
});

// app.use('/api', movieRoutes);
// const express = require('express');
// const rutas = require('./routes');
// const mongoose = require('mongoose');
// const app = express();

// app.use('', rutas);

// app.get('', (req, res)=>{
//     res.send('working on!');
// });

// const mongoURL = 'mongodb+srv://ADMIN:Passw0rd@test.28pfy9x.mongodb.net/Todos?retryWrites=true&w=majority'

// mongoose.connect(mongoURL).then(()=>{
//     app.listen(3000, ()=>{
//         console.log('Si se pudo chaval');
//     });
// }).catch(err=>{
//     console.log('fijate que no se pudo mijo', err);
// });