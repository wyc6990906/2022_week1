const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function (salesData, taxRates) {
  // Implement your code here
  let resultObject = {}
  for (const company in salesData) {
    const companyName = salesData[company].name
    const companyProvince = salesData[company].province
    // console.log(companyProvince)
    const taxRate = taxRates[companyProvince];
    const companySales = salesData[company].sales
    let totalSales = 0
    let totalTaxes = 0
    for (const sale in companySales) {
      totalSales += companySales[sale]
      totalTaxes += companySales[sale] * taxRate
    }
    if (resultObject[companyName] === undefined) {
      resultObject[companyName] = {'totalSales': totalSales, 'totalTaxes': totalTaxes};
    } else {
      resultObject[companyName]['totalSales'] += totalSales;
      resultObject[companyName]['totalTaxes'] += totalTaxes;
    }
  }
  return resultObject
}
const result = calculateSalesTax(companySalesData, salesTaxRates)
console.log(result)
