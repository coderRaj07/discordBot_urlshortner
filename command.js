const { REST, Routes } = require('discord.js');

const commands = [{
    name: "ping",
    description: "Replies with Pong!"
},
{
    
}]

// https://discord.com/channels/guildId/

const clientId = "1190934229333327925"; // from developer portal OAuth2 "https://discord.com/developers/applications/" 
const guildId = "1190933006328811550"; // serverId
const rest = new REST().setToken("MTE5MDkzNDIyOTMzMzMyNzkyNQ.GEslv4.8Va0u4bsqs1hG_NJj7M2-NgOTfpFFS9_Hwq4Rc");

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