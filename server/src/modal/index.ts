// create the connection here
import mongoose from 'mongoose';
async function main() {
  // change the name of the database
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('connected');
}

main().catch((err) => console.log(err));

export { mongoose };
