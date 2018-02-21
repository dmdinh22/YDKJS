const SpendingLimit = 500;
const TaxRate = 0.09;
const PhonePrice = 124.99;
const AccessoryPrice = 14.99;

let moneyInTheBank = 892.13;
let amt = 0;

do {
	// buy phone
	amt = amt + PhonePrice;
	// accessory?
	if (amt < SpendingLimit) {
		amt = amt + AccessoryPrice;
	}
}
while (amt < moneyInTheBank);

// add tax for uncle sam
amt = amt + calculateTax(amt);

alert("Your purchase comes out to a grand total of: " + dollarAmount();

// NO MONEY NO HONEY
if (amt > moneyInTheBank) {
	alert("More than you can afford, pal!");
}

function calculateTax(amt) {
	return amt * TaxRate;
} //calcualteTax

function dollarAmount(amt) {
	return '$' + amt.toFixed(2);
} //formatAmount



