const { Configuration, OpenAIApi } = require("openai");

function ChatGPT(apiKey) {
	const configuration = new Configuration({
  apiKey: apiKey,
});
 this.openai = new OpenAIApi(configuration);
}


ChatGPT.prototype.ask = async function (request) {
  try {
    const response = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo' ,
      messages: [{"role": "system", "content": request}],
      max_tokens: 500,
      temperature: 1,
      stream: false,
    });

    console.log(
      'Full response: ', response,
      'Choices: ', ...response.data.choices
    );
    return response.data.choices[0].message.content;
  } catch (err) {
    console.log('ChatGPT error: ' + err);
    return err;
  }
};

module.exports = ChatGPT;
