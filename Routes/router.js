const express = require('express')
const userController = require('../controllers/userController')
const productController=require('../controllers/productController')
const purchaseController =require("../controllers/purchaseController")
const jwtMiddleware=require('../Middileware/jwtMiddleware')
const multerConfig = require('../Middileware/multerMiddleware')
const router = new express.Router()

//register 
router.post('/register',userController.register)
//login
router.post('/login',userController.login)

//add product
router.post('/add-product',jwtMiddleware,multerConfig.single('productImage'),productController.addProduct)

//get all product

router.get("/all-product",jwtMiddleware,productController.getAllProducts)
//get single product
router.get("/product/:pid",jwtMiddleware,productController.getSingleProduct)
//get user prodcut
router.get("/user-product",jwtMiddleware,productController.getUserProducts)
//place bid
router.put("/bid",jwtMiddleware,purchaseController.bidding)
//get bid
router.get("/bid/:pid",jwtMiddleware,purchaseController.getBid)
//get purchase
router.get("/purchases",jwtMiddleware,purchaseController.getPurchase)
//delete product
router.delete("/delete-product/:pid",jwtMiddleware,productController.deleteProduct)
//get winner
router.get("/winner/:bid",jwtMiddleware,purchaseController.getWinner)

module.exports = router