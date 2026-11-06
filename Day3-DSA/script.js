// Q1: Check Leap Year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

console.log("Q1 (2024 is leap year):", isLeapYear(2024)); // true
console.log("Q1 (1900 is leap year):", isLeapYear(1900)); // false
console.log("Q1 (2000 is leap year):", isLeapYear(2000)); // true


// Q2: Calculate Shop Discount
function calculateDiscount(amount) {
  if (amount < 0 || isNaN(amount)) {
    return "Invalid Input";
  }

  let discountPercent = 0;
  if (amount <= 5000) {
    discountPercent = 0;
  } else if (amount <= 7000) {
    discountPercent = 5;
  } else if (amount <= 9000) {
    discountPercent = 10;
  } else {
    discountPercent = 20;
  }

  let discount = (discountPercent * amount) / 100;
  let finalAmount = amount - discount;

  return {
    originalAmount: amount,
    discountPercent: `${discountPercent}%`,
    discountAmount: discount,
    finalAmount: finalAmount
  };
}

console.log("Q2 Shop Discount (4000):", calculateDiscount(4000));
console.log("Q2 Shop Discount (6000):", calculateDiscount(6000));
console.log("Q2 Shop Discount (8000):", calculateDiscount(8000));
console.log("Q2 Shop Discount (10000):", calculateDiscount(10000));


// Q3: Calculate Electricity Bill
function calculateElectricityBill(unit) {
  if (unit < 0 || isNaN(unit)) {
    return "Invalid Unit";
  }

  let bill = 0;
  if (unit <= 100) {
    bill = unit * 4.2;
  } else if (unit <= 200) {
    bill = 100 * 4.2 + (unit - 100) * 6;
  } else if (unit <= 400) {
    bill = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
  } else {
    bill = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
  }

  return Number(bill.toFixed(2));
}

console.log("Q3 Electricity Bill (50 units):", calculateElectricityBill(50));
console.log("Q3 Electricity Bill (150 units):", calculateElectricityBill(150));
console.log("Q3 Electricity Bill (300 units):", calculateElectricityBill(300));
console.log("Q3 Electricity Bill (500 units):", calculateElectricityBill(500));
