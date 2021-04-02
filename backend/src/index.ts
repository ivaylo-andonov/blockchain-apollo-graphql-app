import appConfig, { Config } from "./config";
import server from "./server";

const bootstrap = async (config: Config, logger: any) => {
  const { port } = config;
  try {
    const { url } = await server.listen(port);
    logger.info({ message: `Server running on: ${url}` });
  } catch (error) {
    logger.error(error);
  }
};

bootstrap(appConfig, global.console);
