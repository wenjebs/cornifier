import { GoogleGenerativeAI } from "@google/generative-ai";

async function meow() {
  console.log("ai testing");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBwJmAv979enXEPE9grY_eTo9yhWGeFL_w"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Explain how AI works";
  const result = await model.generateContent(prompt);
  console.log("memomomo");
  console.log(result.response.text());
}

setTimeout(() => {
  const test = document.querySelectorAll("#video-title");
  test.forEach(async (title) => {
    const newTitle = await generatePornifiedTitle(title.textContent);
    title.textContent = newTitle;
  });
  console.log(test);
  console.log("hello from wj");
}, 3000);

async function generatePornifiedTitle(title) {
  console.log("ai testing");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBwJmAv979enXEPE9grY_eTo9yhWGeFL_w"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt =
    "Convert this title into a cheeky sexual one, Return only the title while maintainining a playful tone without being explicitly sexual.  They hint at innuendo through word choice and suggestive phrasing, relying on the reader to fill in the gaps. - " +
    title;
  const result = await model.generateContent(prompt);
  console.log("memomomo");
  console.log(result.response.text());
  return result.response.text();
}
