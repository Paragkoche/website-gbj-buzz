import {PrismaClient} from "@prisma/client"

const connection = (async()=>{
    const db = new PrismaClient()
    await db.$connect();
    return db;
})();

export default await connection