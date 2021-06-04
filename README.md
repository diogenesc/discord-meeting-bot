# Discord Meeting Bot

A bot with meeting funcionalities to your server.

### Features

- Temporary channels
- To do...

### Usage/Example

Type the command !meet to create a temporary channel

`!meet Backend Daily`

A channel with this name will be created in a new category called Meetings.

You can join the channel, but after the last member leaves, the channel will be destroyed automatically.

### Installation

You need Node and NPM installed and:
```
git clone https://github.com/diogenesc/discord-meeting-bot
cd discord-meeting-bot
cp .env.example .env
```
Edit .env with necessary variables and:
`npm start`

Or you can use Docker
```
docker run -e BOT_TOKEN="YOUR_BOT_TOKEN_PROVIDED_BY_DISCORD" --init diogenesc/discord-meeting-bot
```