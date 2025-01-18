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
  test.forEach(
    (title) => (title.textContent = generatePornifiedTitle(title.textContent))
  );
  console.log(test);
  console.log("hello from wj");
}, 3000);

async function generatePornifiedTitle(title) {
  console.log("ai testing");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBwJmAv979enXEPE9grY_eTo9yhWGeFL_w"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Convert this title into a sexual title - " + title;
  const result = await model.generateContent(prompt);
  console.log("memomomo");
  console.log(result.response.text());
  return result.response.text();
}
