const Product = require('../models/product');


   const  products= [
        {
            "id": 1,
            "title": "Apple MacBook Pro 14 Inch Space Grey",
            "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
            "category": "laptops",
            "brand": "Apple",
            "price": 1999.99,
            "stock": 39,
            "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
        },
        {
            "id": 2,
            "title": "Asus Zenbook Pro Dual Screen Laptop",
            "description": "Innovative dual-screen laptop with high performance and sleek design.",
            "category": "laptops",
            "brand": "Asus",
            "price": 1499.99,
            "stock": 25,
            "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png"
        },
        {
            "id": 3,
            "title": "Huawei Matebook X Pro",
            "description": "Ultra-slim laptop with stunning display and powerful performance.",
            "category": "laptops",
            "brand": "Huawei",
            "price": 1399.99,
            "stock": 15,
            "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
        },
        {
            "id": 4,
            "title": "Lenovo Yoga 920",
            "description": "Versatile 2-in-1 laptop with 4K display and premium build.",
            "category": "laptops",
            "brand": "Lenovo",
            "price": 1199.99,
            "stock": 20,
            "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png"
        },
        {
            "id": 5,
            "title": "New DELL XPS 13 9300 Laptop",
            "description": "Compact laptop with high performance and elegant design.",
            "category": "laptops",
            "brand": "Dell",
            "price": 1299.99,
            "stock": 10,
            "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png"
        },
        {
            "id": 6,
            "title": "Apple",
            "category": "groceries",
            "brand": null,
            "price": 1.99,
            "stock": 100,
            "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
        },
        {
            "id": 7,
            "title": "Beef Steak",
            "category": "groceries",
            "brand": null,
            "price": 15.99,
            "stock": 50,
            "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
        },
        {
            "id": 8,
            "title": "Cat Food",
            "category": "groceries",
            "brand": null,
            "price": 4.99,
            "stock": 75,
            "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
        },
        {
            "id": 9,
            "title": "Chicken Meat",
            "category": "groceries",
            "brand": null,
            "price": 10.99,
            "stock": 30,
            "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png"
        },
        {
            "id": 10,
            "title": "Cooking Oil",
            "category": "groceries",
            "brand": null,
            "price": 5.49,
            "stock": 60,
            "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
        },
        {
            "id": 11,
            "title": "Blue & Black Check Shirt",
            "category": "mens-shirts",
            "brand": "Fashion Trends",
            "price": 29.99,
            "stock": 20,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png"
        },
        {
            "id": 12,
            "title": "Gigabyte Aorus Men Tshirt",
            "category": "mens-shirts",
            "brand": "Gigabyte",
            "price": 19.99,
            "stock": 15,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png"
        },
        {
            "id": 13,
            "title": "Man Plaid Shirt",
            "category": "mens-shirts",
            "brand": "Classic Wear",
            "price": 24.99,
            "stock": 30,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png"
        },
        {
            "id": 14,
            "title": "Man Short Sleeve Shirt",
            "category": "mens-shirts",
            "brand": "Casual Comfort",
            "price": 22.99,
            "stock": 25,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png"
        },
        {
            "id": 15,
            "title": "Men Check Shirt",
            "category": "mens-shirts",
            "brand": "Urban Chic",
            "price": 27.99,
            "stock": 10,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png"
        },
        {
            "id": 16,
            "title": "iPhone 5s",
            "category": "smartphones",
            "brand": "Apple",
            "price": 199.99,
            "stock": 50,
            "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
        },
        {
            "id": 17,
            "title": "iPhone 6",
            "category": "smartphones",
            "brand": "Apple",
            "price": 299.99,
            "stock": 45,
            "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
        },
        {
            "id": 18,
            "title": "iPhone 13 Pro",
            "category": "smartphones",
            "brand": "Apple",
            "price": 999.99,
            "stock": 30,
            "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
        },
        {
            "id": 19,
            "title": "iPhone X",
            "category": "smartphones",
            "brand": "Apple",
            "price": 799.99,
            "stock": 20,
            "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
        },
        {
            "id": 20,
            "title": "Oppo A57",
            "category": "smartphones",
            "brand": "Oppo",
            "price": 199.99,
            "stock": 40,
            "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
        },
        {
            "id": 21,
            "title": "Brown Leather Belt Watch",
            "category": "mens-watches",
            "brand": "Fashion Timepieces",
            "price": 199.99,
            "stock": 15,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png"
        },
        {
            "id": 22,
            "title": "Longines Master Collection",
            "category": "mens-watches",
            "brand": "Longines",
            "price": 799.99,
            "stock": 10,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png"
        },
        {
            "id": 23,
            "title": "Rolex Cellini Date Black Dial",
            "category": "mens-watches",
            "brand": "Rolex",
            "price": 999.99,
            "stock": 5,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png"
        },
        {
            "id": 24,
            "title": "Rolex Cellini Moonphase",
            "category": "mens-watches",
            "brand": "Rolex",
            "price": 1099.99,
            "stock": 3,
            "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png"
        },
        {
            "id": 25,
            "title": "Generic Motorcycle",
            "category": "motorcycles",
            "brand": "Generic Motors",
            "price": 4999.99,
            "stock": 7,
            "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png"
        },
        {
            "id": 26,
            "title": "Kawasaki Z800",
            "category": "motorcycles",
            "brand": "Kawasaki",
            "price": 8999.99,
            "stock": 5,
            "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png"
        },
        {
            "id": 27,
            "title": "MotoGP CI.H1",
            "category": "motorcycles",
            "brand": "MotoGP",
            "price": 7999.99,
            "stock": 4,
            "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/thumbnail.png"
        },
        {
            "id": 28,
            "title": "Scooter Motorcycle",
            "category": "motorcycles",
            "brand": "ScootMaster",
            "price": 1999.99,
            "stock": 15,
            "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/thumbnail.png"
        },
        {
            "id": 29,
            "title": "Sportbike Motorcycle",
            "category": "motorcycles",
            "brand": "SpeedMaster",
            "price": 5999.99,
            "stock": 6,
            "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png"
        }
    ]



    const insertAllProducts = async (req, res) => {
      
        try {
            const createdProducts = await Product.bulkCreate(
                products.map(product => ({
                    name: product.title || "none",
                    description: product.description || "none",
                    category: product.category || "none",
                    brand: product.brand || "none",
                    price: product.price || 0, // Default price to 0 if missing
                    stock: product.stock || 0, // Default stock to 0 if missing
                    imageUrl: product.imageUrl || "none"
                }))
            );
           
        } catch (error) {
        }
    };
    
 insertAllProducts()