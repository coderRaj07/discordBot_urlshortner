const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {

    console.log("App is running", message.content)

    if (message.author.bot) return;

    if (message.content.startsWith("create")) {

        const url = message.content.split("create")[1];

        return message.reply({
            content: "Generating short Id for " + url,
        })
    }

    message.reply({
        content: "Hello From Bot",
    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login("MTE5MDkzNDIyOTMzMzMyNzkyNQ.GEslv4.8Va0u4bsqs1hG_NJj7M2-NgOTfpFFS9_Hwq4Rc")