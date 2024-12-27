import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import DashboardRoutes from './Routes/DashboardRoutes'
import ProductRoutes from './Routes/ProductRoutes'
import UserRoutes from './Routes/UserRoutes'
import ExpensesRoutes from './Routes/ExpensesRoutes'


/*configuration*/
dotenv.config(); // souvent avant express
const app = express(); //!
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))



/*routes*/

app.use('/dashboard',DashboardRoutes);
app.use('/products',ProductRoutes);
app.use('/users',UserRoutes);
app.use('/expenses',ExpensesRoutes)

/*server*/


const port = 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});