import { app } from "./src/app.js";
import { logger } from "./src/utils/index.js";
import { application } from "./src/config/index.js";

const port = application.port;

const startApp = async () => {
  try {
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

startApp();
