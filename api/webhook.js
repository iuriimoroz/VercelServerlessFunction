const axios = require('axios');

module.exports = async (request, response) => {
    try {
        const axiosResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const bitcoinPrice = axiosResponse.data.bitcoin.usd;

        const chat_id = process.env.CHATID;
        const bot_id = process.env.BOTID;

        // Prepare the message
        const message = `Current Bitcoin price: $${bitcoinPrice}`;

        // Send the message to the Telegram chat
        await axios.post(`https://api.telegram.org/${bot_id}/sendMessage`, {
            chat_id: chat_id,
            text: message
        });

        // Respond with a success message
        response.status(200).send('Bitcoin price sent successfully.');
    } catch (error) {
        console.error('Error:', error);
        response.status(500).send('Failed to send Bitcoin price.');
    }
};
