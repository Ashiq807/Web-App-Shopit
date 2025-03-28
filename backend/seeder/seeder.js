import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashiqos807:sBKwKkQXmIv4RLIf@shopit.6xdsbn0.mongodb.net/shopit?retryWrites=true&w=majority&appName=shopit"
    );

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedProducts();
