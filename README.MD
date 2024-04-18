
# Bitcoin Price Notifier Serverless Function

  

This serverless function notifies a Telegram chat about the current price of Bitcoin at configured intervals using a cron job.

  

## Prerequisites

  

Before deploying this serverless function, ensure you have the following:

  

- A Vercel account

- A Telegram bot created using BotFather on Telegram

- A Telegram chat ID where you want to receive notifications

- Configuration of environment variables (CHATID, BOTID) in your Vercel project's settings

  

## Deployment

  

To deploy this serverless function on Vercel, follow these steps:

  

1. Clone this repository to your local machine:

  

```bash

git clone https://github.com/your_username/your_repository.git

cd your_repository

npm install
```

2. Modify the vercel.json file to include the cron job configuration:

  
```bash
{ "crons": [ { "path": "/api/webhook", "schedule": "12 3 * * *" } ] }
```
3. Adjust the schedule field according to your desired interval.

4. Deploy the project to Vercel:

 ```bash
vercel
 ```
5. Set up environment variables (CHATID, BOTID) in your Vercel project's settings. These environment variables should correspond to your Telegram chat ID and Telegram bot ID respectively.

6. Once deployed, the function will run at the specified intervals and send Bitcoin price notifications to your Telegram chat.

## Usage

The serverless function retrieves the current price of Bitcoin from the CoinGecko API and sends a notification to the configured Telegram chat. You can adjust the functionality as per your requirements.

  

## Troubleshooting

If you encounter any issues with deployment or functionality, please refer to the error messages in the Vercel logs and the console. Ensure that your environment variables are correctly configured and that the dependencies are installed properly.

  

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions, improvements, or bug fixes.

  

## License

This project is licensed under the MIT License. See the LICENSE file for details.