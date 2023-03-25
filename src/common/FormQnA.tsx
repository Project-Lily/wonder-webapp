import InputBox from "./InputBox";

export default function FormQnA(ws: any) {
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
