import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Apple iPhone 15",
      url: "https://www.apple.com/in/iphone-15/",
      imageUrl: "https://store.storeimages.cdn-apple.com/iphone15.jpg",
      priceHistory: generateMonthlyPrices(89999, [87000, 86500, 86000, 85000, 84999, 84500, 84000, 83000, 82000, 81000, 80500, 79999]),
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      url: "https://www.samsung.com/in/smartphones/galaxy-s24-ultra/",
      imageUrl: "https://images.samsung.com/s24ultra.jpg",
      priceHistory: generateMonthlyPrices(129999, [128999, 127999, 126999, 125999, 124999, 123999, 122999, 121999, 120999, 120499, 119999, 119499]),
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      url: "https://www.sony.co.in/headphones/wh-1000xm5",
      imageUrl: "https://sony.co.in/images/wh1000xm5.jpg",
      priceHistory: generateMonthlyPrices(34999, [34500, 34000, 33500, 33000, 32500, 32000, 31500, 31000, 30500, 30000, 29999, 29999]),
    },
    {
      name: "Apple MacBook Air M3",
      url: "https://www.apple.com/in/macbook-air-m3/",
      imageUrl: "https://store.storeimages.cdn-apple.com/macbookairm3.jpg",
      priceHistory: generateMonthlyPrices(124999, [123999, 122999, 121999, 120999, 119999, 118999, 117999, 116999, 115999, 115499, 114999, 114499]),
    },
    {
      name: "Logitech MX Master 3S Mouse",
      url: "https://www.logitech.com/en-in/products/mice/mx-master-3s.html",
      imageUrl: "https://logitech.com/images/mxmaster3s.jpg",
      priceHistory: generateMonthlyPrices(9999, [9899, 9799, 9699, 9599, 9499, 9399, 9299, 9199, 9099, 8999, 8899, 8799]),
    },
  ];

  // Insert products with their month-wise history

  for (const p of products) {
  await prisma.product.create({
    data: {
      name: p.name,
      url: p.url,
      imageUrl: p.imageUrl,
      currentPrice: p.priceHistory[p.priceHistory.length - 1].price,
      priceHistory: {
        create: p.priceHistory,
      },
    },
    });
    }


  console.log("✅ Month-wise price data seeded successfully!");
}


function generateMonthlyPrices(basePrice: number, monthlyPrices: number[]) {
  const history = [];
  for (let i = 0; i < 12; i++) {
    history.push({
      price: monthlyPrices[i],
      date: new Date(2024, i, 15), 
    });
  }
  return history;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
