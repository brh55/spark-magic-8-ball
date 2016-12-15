# spark-magic-8-ball

[![Travis branch](https://img.shields.io/brh55/spark-magic-8-ball/master.svg)]()

The best solution to all of your questions, a magic 8 ball! But now within your Cisco Spark room.

![Demo Image](https://cloud.githubusercontent.com/assets/6020066/21218766/b42928f2-c266-11e6-81c6-5746f518b09b.png)

## Usage
Add @bot-name to your room, and mention the bot along with a question *(? is optional)*

## Deployment
1. Cisco developer account
2. Create an app/bot to be used for your team's domain (reference the [bot-icon.png](https://raw.githubusercontent.com/brh55/spark-magic-8-ball/master/bot-icon.png) url for the bot's icon for convenience).
3. Copy the example.env to your own .env file, and define the variables
    `$ cp example.env .env`
4. After a successful URL pointing to your server, start the server
    `$ npm start`

### Quick Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

*Note: You must login before it will direct you to the quick deploy page.*

## Contribution
This is a fairly small scope project, but I am always willing to take usability improvements, bug fixes, etc. 
