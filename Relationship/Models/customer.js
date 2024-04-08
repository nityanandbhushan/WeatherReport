const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/OneToManyDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    },],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "akash rahul",
//     });

//     let order1 = await Order.findOne({ item: "chips" });
//     let order2 = await Order.findOne({ item: "chocklate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
//     let result = await cust1.save();
//     console.log(result);

// };

//  addCustomer();

// const addOrder = async () => {
//     let  orders= await Order.insertMany([
//         {
//             item: "samosa",
//             price: 12,
//         },
//         {
//             item: "chips",
//             price: 10,
//         },
//         {
//             item: "chocklate",
//             price: 30,
//         },
//     ]);
//     for(let order of orders){ 
//         await order.save();
//     };
//     console.log(orders);
// };
// addOrder();

//Function 

// const findCustomer =async()=>{ 
//     let result=await Customer.find({}).populate("orders");
//     console.log(result[0]);
// }; 


// const addCustomer = async () => {
//     let newCust1 = new Customer({
//         name: "akash rahul",
//     });

//     let newOrder=new Order({ 
//         item:"Pizza",
//         price:250,
//     });
 
// }





