import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Conectado ao mongoDB"))
    .catch((err) => console.error("Erro ao conectar com o MongoDB", err));
};

export default connectMongo;
