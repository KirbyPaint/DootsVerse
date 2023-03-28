import "./config";
import Bot from "./bot";

void (async () => {
  try {
    await Bot.init();
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
})();
