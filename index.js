const app = express();

const PORT = process.env.PORT  || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// DATA
const rezzy = [{}];
