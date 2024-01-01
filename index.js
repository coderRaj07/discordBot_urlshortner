const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const dotenv = require("dotenv");
dotenv.config();

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
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    else if (commandName === 'short') {
        const url = interaction.options.getString('url') || interaction.commandName;

        if (!url.startsWith('http')) {
            return interaction.reply('Please provide a valid URL.');
        }

        try {
            const shortenedUrl = await shortenUrl(url);
            console.log("Shortned url", shortenedUrl);
            await interaction.reply(`Shortened URL: ${shortenedUrl}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while shortening the URL.');
        }
    }
    else if (commandName === 'timeboundshort') {
        const url = interaction.options.getString('url') || interaction.commandName;
        
        if (!url.startsWith('http')) {
            return interaction.reply('Please provide a valid URL.');
        }

        try {
            const fullUrl = await shortenUrlWithExpiration(url);
            await interaction.reply(`Time-bound Shortened URL: ${fullUrl}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while shortening the URL.');
        }
    }
});


async function shortenUrl(url) {
    try {
        const response = await axios.post('https://rich-pink-dhole-cuff.cyclic.app/url', { url });
        const shortId = response.data.id;
        return `https://rich-pink-dhole-cuff.cyclic.app/${shortId}`;
    } catch (error) {
        console.error(error);
        throw new Error('Error while shortening the URL');
    }
}


async function shortenUrlWithExpiration(url) {
    const response = await axios.post('https://rich-pink-dhole-cuff.cyclic.app/url?expiration=true', { url });
    const shortId = response.data.id;
    return `https://rich-pink-dhole-cuff.cyclic.app/${shortId}`;
}

client.login(process.env.token)