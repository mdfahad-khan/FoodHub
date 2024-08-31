// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// const addFood = async (req, res) => {
//   let image_filename = `${req.file.filename}`;
//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });
//   try {
//     await food.save();
//     res.json({ success: true, message: "food added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "error" });
//   }
// };
// const removeFood = async (req, res) => {
//   try {
//     const food = await foodModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`, () => {});
//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "food remove" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "error" });
//   }
// };

// export { addFood, listFood, removeFood };

import foodModel from "../models/foodModel.js";
import fs from "fs/promises"; // Use the promise-based version of fs

const addFood = async (req, res) => {
  const image_filename = req.file.filename;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.status(200).json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error saving food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching foods" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    // Delete the associated image file
    await fs.unlink(`uploads/${food.image}`);

    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Food removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };
