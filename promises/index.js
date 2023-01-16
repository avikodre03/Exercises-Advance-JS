

// const MyData = fetch("https://api.github.com/users/avikodre03")

// console.log(MyData);

const cart = ["bread", "butter", "jam", "myo"]
const promise2 = createOrder(cart)
console.log(cart);
promise2.then(function (orderId) {
return paymentRequist(orderId)
})
.then(function (res) {
 console.log(res);
 return confirmation(res)
}).then(function (status) {
    console.log(status);
    
})

.catch(function (error) {
    console.log(error.message);
    
})


var tempOrderId
function createOrder(cart) {

    const promise = new Promise(function (resolve, reject) {
      
        const orderId = (Math.random()*1000000).toFixed(0)
        tempOrderId=orderId
        if (cart.length == 4) {
            resolve(orderId)
        } else {

            const error = new Error("your promise is rejected")
            reject(error)
        }
    })

    return promise
}


function paymentRequist(orderId) {

    const promise = new Promise(function (resolve, reject) {
        console.log(orderId);
        
        if (orderId === tempOrderId) {
            resolve("Success")
        } else {

            const error = new Error("payment faild")
            reject(error)
        }
    })

    return promise
}


function confirmation(res) {

    const promise = new Promise(function (resolve, reject) {

        
        if (res == "Success") {
            resolve("SuccessFull")
        } else {

            const error = new Error("order faild")
            reject(error)
        }
    })

    return promise
}

