const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: [{"role": "system", "content": "You are a mental health advisor"},
              {"role": "user", "content": `provide mental health advice on ${req.body.prompt}`}],
      temperature: 0.3,
      max_tokens: 1000
    })
    
    res.status(200).json({ text: response.data.choices[0].text })
    // res.status(200).json({ text: 'Hello! how are you?' })


  } else {
    res.status(200).json({ text: "Invalid prompt provided." })
  }
}
