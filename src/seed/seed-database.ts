import { initialData } from "./seed";
import prisma from "../lib/prisma";
async function main() {
  await Promise.all([
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);

  console.log("Seed Ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
