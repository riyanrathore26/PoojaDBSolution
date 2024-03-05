// Import required modules
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

require('dotenv').config();

const bucketName = "marblestorebucket";

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-south-1'
};

const S3 = new AWS.S3(awsConfig);

const uploadToS3 = (fileData) => {
  return new Promise((resolve, reject) => {
      const params = {
          Bucket: bucketName,
          Key: `yes_madam/${fileData.originalname}`,
          Body: fileData.buffer, // Extract the buffer from the file object
      };
      S3.upload(params, (err, data) => {
          if (err) {
              return reject(err);
          }
          console.log(data.Location);
          return resolve(data);
      });
  });
};

mongoose.connect('mongodb://localhost:27017/yes_madam', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


// Define a schema for your product data
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  parentImage: String, // Assuming you'll store the parent image URL
  images: [String] // Assuming you'll store the images URLs as an array of strings
});

// Create a model based on the schema
const Post = mongoose.model('Product', productSchema);


app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/products/:productId', async (req, res) => {
    console.log("li");
    console.log(req.params.productId);
    try {
      const product = await Post.findById(req.params.productId);
      console.log(product);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Your add_product route handler
app.post('/add_product', upload.array('images', 13), async (req, res) => {
    try {
        const { name, description, price } = req.body;

        // Wait for all promises to resolve before processing
        const imagePaths = (await Promise.all(req.files.map(async file => {
            const urlimg = await uploadToS3(file);
            if (file && file.originalname) {
                console.log(urlimg.Location);
                return urlimg.Location;
            }
            return null;
        }))).flat(); // Flatten the array of arrays

        // Now that all promises have resolved and the array is flattened, you can proceed with saving the data
        const newProduct = new Post({
            name,
            description,
            price,
            images: imagePaths,
        });

        await newProduct.save();

        res.status(201).send('Product added successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
