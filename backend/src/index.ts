import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'


/*configuration*/
dotenv.config(); // souvent avant express
const app = express(); //!
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))



/*routes*/

app.get('/hello', (req,res) => {
    res.send('hello next')
})

/*server*/


const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});