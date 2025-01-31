import { ObjectId } from "mongodb";
import { dbCollections, dbConnect } from "./dbConnect";

const getAService = async (id: string) => {
  const collection = await dbConnect(dbCollections.SERVICES);
  const query = {
    _id: new ObjectId(id),
  };
  const result = await collection.findOne(query);
  return result;
};

export default getAService;
