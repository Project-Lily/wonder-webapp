import React from "react";
// import FormQnA from "../common/FormQnA";
import InputBox from "../common/InputBox";
import { config } from "../config/constants";

const ws = new WebSocket("wss://${config.BASE_URL}/socket");
ws.onopen = () => {
  ws.onmessage = (data) => {
    console.log(`My id is : ${data.data}`);
    // Creates room and destroys own listener, this is so that this listener doesn't mess with future events
    createRoom(data.data, ws);
  };
  console.log("Connected");
};

const createRoom = (data: any, ws: WebSocket) => {
  // MAKE SURE IT'S HTTPS, nginx is cursed
  fetch(`https://${config.BASE_URL}/node/teacher/join/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      id: data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ws.onmessage = (data) => {
        console.log(data.data);
      };
    });
};

export default function Home(): JSX.Element {
  const [wsTrue, setWsTrue] = React.useState<boolean>(false);

  const handleCreateRoom = () => {
    setWsTrue(true);
  };

  function CreateRoom() {
    return (
      <div className="m-auto">
        <button
          onClick={handleCreateRoom}
          className="cursor-pointed mx-auto mt-8 rounded-xl bg-wonder-purple p-2 text-white"
        >
          Create Room
        </button>
      </div>
    );
  }

  function FormQnA() {
    const handleSubmit = (event: any) => {
      // Prevent default browser reloading behaviour
      event.preventDefault();

      // Read form data
      const form = event.target;
      const formData = new FormData(form);

      // Read object
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);

      ws.send(
        JSON.stringify({
          eventName: "SEND_QUESTION",
          question: formJson.Question,
          answer: formJson.Answer,
        })
      );

      event.target.reset(); // Clear form input
    };

    return (
      <div className="m-auto">
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-md grid-cols-1 gap-4"
        >
          <label htmlFor="Question" className="font-medium">
            Question
          </label>
          <InputBox
            type="text"
            placeholder="Insert Question"
            name="Question"
            id="Question"
          />
          <label htmlFor="Answer" className="font-medium">
            Answer
          </label>
          <InputBox
            type="text"
            placeholder="Insert Answer"
            name="Answer"
            id="Answer"
          />
          <button className="cursor-pointed mx-auto mt-8 rounded-xl bg-wonder-purple p-2 text-white">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center border-4 border-wonder-purple pt-4 text-3xl text-black">
      <h1 className="p-4 font-mono text-4xl font-bold text-wonder-purple">
        Wonder Reader
      </h1>
      {!wsTrue ? <CreateRoom /> : <FormQnA />}
    </div>
  );
}
