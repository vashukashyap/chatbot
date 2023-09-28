const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)



export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createImage({
      prompt: `Generate a funny meme with english or hindi text, ${req.body.prompt}`,
      n: 1,
      size: "256x256"
    })

    res.status(200).json({ text: response.data.data[0].url })
    // res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  } else {
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  }
}
