import "dotenv/config";
import path from "path";
import { IConfig } from "../interfaces/IConfig";

const CONFIG_PATH = path.resolve(__dirname, "..", "config.json");
let config: IConfig;

try {
  config = require(CONFIG_PATH);
} catch {
  config = {
    name: process.env.NAME || "",
    token: process.env.TOKEN || "",
    clientId: process.env.CLIENT_ID || "",
    colour: process.env.COLOUR || "",
    log: {
      guildId: process.env.GUILD_ID || "",
      channelId: process.env.CHANNEL_ID || "",
    },
    capmonster: {
      key: process.env.CAPMONSTER_APIKEY || "",
    },
  };
}

export { config };
