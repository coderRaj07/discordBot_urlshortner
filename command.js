const { REST, Routes } = require('discord.js');
const dotenv = require("dotenv");
dotenv.config();

const commands = [{
	name: "ping",
	description: "Replies with Pong!"
},
{
	name: "short",
	description: 'Shortens the provided URL',
	options: [
		{
			name: 'url',
			type: 3,
			description: 'The URL to shorten',
			required: true,
		},
	],
},
{
	name: "timeboundshort",
	description: 'Shortens the provided URL with a 30-minute expiration',
	options: [
		{
			name: 'url',
			type: 3,
			description: 'The URL to shorten',
			required: true,
		},
	],
},]

// https://discord.com/channels/guildId/

const clientId = process.env.clientId; 	// from developer portal OAuth2 "https://discord.com/developers/applications/" 
const guildId = process.env.guildId; 	// serverId
const rest = new REST().setToken(process.env.token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();