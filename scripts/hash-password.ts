import bcrypt from "bcrypt";

async function generateHash() {
    const password = "Luiecub1208@M";

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);
}

generateHash();