# 🤖 Discord URL Shortener Bot

Welcome to the Discord URL Shortener Bot! This bot allows you to easily shorten URLs directly within your Discord server. With additional time-bound shortening capabilities, your links can have a limited lifespan.

## Getting Started 🚀

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/coderRaj07/discordBot_urlshortner.git
    ```

2. Navigate to the project directory:

    ```bash
    cd discordBot_urlshortner
    ```

3. Create a `.env` file and provide the following information:

    ```env
    CLIENT_ID=your_discord_bot_client_id
    GUILD_ID=your_discord_guild_id
    TOKEN=your_discord_bot_token
    ```

### Running the Bot

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the bot:

    ```bash
    npm start
    ```

### Join Testing Channel 🛠️

To test the bot, join the testing channel on [Discord](https://discord.com/channels/1190933006328811550/).

## Bot Commands 🤖

### Shorten URL

To shorten a URL, use the following command:

```plaintext
/short [URL]
```

Replace `[URL]` with the actual URL you want to shorten. The bot will provide you with a shortened URL.

### Time-Bound Shorten URL

To create a time-bound shortened URL valid for 30 minutes, use the following command:

```plaintext
/timeboundshort [URL]
```

Replace `[URL]` with the actual URL you want to shorten. The bot will generate a shortened URL with a 30-minute validity.

## Deployment 🌐

Deploying this project requires the following steps:

1. Clone the URL Shortener Server repository:

    ```bash
    git clone https://github.com/coderRaj07/discordBot_urlshortner.git
    ```

2. Navigate to the server project directory and follow the server deployment instructions in its README.

3. Provide the `CLIENT_ID`, `GUILD_ID`, and `TOKEN` in the `.env` file of the Discord URL Shortener Bot.

4. Run the Discord URL Shortener Bot using the steps mentioned in the "Running the Bot" section.

Now, your Discord URL Shortener Bot is up and running!

## API Server

The bot internally uses an API server available at:

- API URL: [https://rich-pink-dhole-cuff.cyclic.app/url](https://rich-pink-dhole-cuff.cyclic.app/url)

For more information on the API server, check out its code repository: [URL Shortener Server](https://github.com/coderRaj07/URLshortner_server)

Happy URL Shortening! 🌐🔗
