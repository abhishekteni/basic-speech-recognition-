const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

const speechrecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const texttospeak = ["i am good", "nothing much", "fine"];
const weather = ["nice weather", "why what happened", "lovely weather"];
const recognition = new speechrecognition();
recognition.onstart = () => {
  console.log("record your voice");
};
recognition.onresult = (event) => {
  console.log(event);
  const cur = event.resultIndex;
  const transcript = event.results[cur][0].transcript;
  //content.textContent = transcript;
  readloud(transcript);
};
btn.addEventListener("click", () => {
  recognition.start();
});
//Math.floor(Math.random() * texttospeak.length)
const readloud = (msg) => {
  const speech1 = new SpeechSynthesisUtterance();
  if (msg.includes("how are you")) {
    const finaltext =
      texttospeak[Math.floor(Math.random() * texttospeak.length)];
    speech1.text = finaltext;
  } else if (msg.includes("how is weather")) {
    const finaltext = weather[Math.floor(Math.random() * weather.length)];
    speech1.text = finaltext;
  } else {
    speech1.text = "tu  " + msg;
  }

  speech1.volume = 1;
  speech1.rate = 1;
  speech1.pitch = 1;
  window.speechSynthesis.speak(speech1);
};
