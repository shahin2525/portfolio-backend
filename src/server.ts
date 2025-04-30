// import mongoose from 'mongoose';
// import config from './app/config';
// import app from './app';

// async function main() {
//   try {
//     await mongoose.connect(config.db_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    // const test = 10;
    //  console.log(test);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    // this is console
    console.log(error);
  }
}

main().catch((err) => console.log(err));
