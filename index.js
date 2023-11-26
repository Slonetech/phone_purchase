const bankAcc = 54000;
const phonePrice = 4000;
const accessoriesPrice = 500;
const taxRate = 0.08;
const spendingThreshold = 50000

//function to calculate tax
function calculateTax (amount){
    return amount * taxRate;
}

function formatPrice (amount){
    return '$'+ amount.toFixed(2)
}

let purchaseAmount = phonePrice + accessoriesPrice;

while (purchaseAmount <= bankAcc && purchaseAmount < spendingThreshold){
    purchaseAmount += calculateTax(purchaseAmount);

    console.log("purchase Amount :" + formatPrice (purchaseAmount));

    if (purchaseAmount > bankAcc){
        console.log("you can't afford it.");
        break;
    }
    purchaseAmount += phonePrice + accessoriesPrice;
}

if (purchaseAmount >= spendingThreshold){
    console.log("you've reached your spending threshold. Consider stopping");
}