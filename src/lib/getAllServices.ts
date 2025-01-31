import { dbCollections, dbConnect } from "./dbConnect";

const getAllServices = async () => {
  const collections = await dbConnect(dbCollections.SERVICES);
  const result = await collections.find().toArray();
  return result;
};

export default getAllServices;
