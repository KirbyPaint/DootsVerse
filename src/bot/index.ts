import { Client, Events, GatewayIntentBits, REST } from "discord.js";

import { isDev } from "../util/env";

export default class Bot {
	public static client: Client = this.createClient();
	public static restAPI = new REST({ version: `10` }).setToken(
		process.env.BOT_TOKEN || ``
	);
	public static isDev = isDev;

	public static async init() {
		await self.login();
		self.showStartupMessage();
		self.client.user?.setActivity(`DootsVerse`, { type: 5 });
	}

	public static getName(): string {
		return self.client.user?.username || `DootsVerse`;
	}

	private static createClient(): Client {
		// https://discord.com/developers/docs/topics/gateway#list-of-intents
		const NONEXISTENT_INTENTS = [131072, 262144, 524288];
		const DISALLOWED_INTENTS: GatewayIntentBits[] = [
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildPresences,
			GatewayIntentBits.MessageContent
		];
		const intents = Array.from({ length: 21 }, (_, i) => 2 ** i).filter(
			(i) => !DISALLOWED_INTENTS.concat(NONEXISTENT_INTENTS).includes(i)
		);
		return new Client({
			intents
			// partials: [Partials.Channel],
		});
	}

	private static async login() {
		return new Promise<void>((resolve, reject) => {
			self.client.login(process.env.BOT_TOKEN).catch((e) => {
				reject(e);
			});
			self.client.on(Events.ClientReady, () => {
				resolve();
			});
		});
	}

	private static showStartupMessage() {
		const readyMessageLines = [
			`Logged in as ${self.client.user?.tag}!`,
			`Connected to the following servers:`
		];
		self.client.guilds.cache.forEach((guild) => {
			readyMessageLines.push(`  ${guild.name}`);
		});
		console.log(readyMessageLines.join(`\n`));
	}
}

const self = Bot;
