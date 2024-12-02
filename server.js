import { app } from "./src/app.js";
import { application } from "./src/config/index.js";

const port = application.port;

const serverstart = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await serverstart();
