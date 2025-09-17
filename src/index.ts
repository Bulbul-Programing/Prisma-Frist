import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Bulbul",
  //     email: "bulbul2@gmail.com",
  //     profilePhoto : 'https://bulbul.com/profile/logo.jpg'
  //   }
  // })

  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: 1
    }
  })

  console.log(result);
}

main()