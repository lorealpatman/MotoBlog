import express from 'express';
const app = express();
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/userRoutes.js';
import postRoute from './routes/postsRoutes.js';
import categoryRoute from './routes/categoriesRoutes.js';
import multer from 'multer';
import path from 'path';

dotenv.config();

app.use(express.json());
const __dirname = path.resolve();
app.use('/images', express.static(path.join(__dirname, '/images')));

connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

// app.get('/', (req, res) => {
//   res.send('API is running....');
// });

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);
app.listen(5000, console.log('Server is running on port 5000'));
