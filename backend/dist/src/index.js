"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const DashboardRoutes_1 = __importDefault(require("./Routes/DashboardRoutes"));
const ProductRoutes_1 = __importDefault(require("./Routes/ProductRoutes"));
const UserRoutes_1 = __importDefault(require("./Routes/UserRoutes"));
const ExpensesRoutes_1 = __importDefault(require("./Routes/ExpensesRoutes"));
/*configuration*/
dotenv_1.default.config(); // souvent avant express
const app = (0, express_1.default)(); //!
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/*routes*/
app.use('/dashboard', DashboardRoutes_1.default);
app.use('/products', ProductRoutes_1.default);
app.use('/users', UserRoutes_1.default);
app.use('/expenses', ExpensesRoutes_1.default);
/*server*/
const port = 8000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
