import InputBox from "./InputBox";

export default function Form() {
  return (
    <div className="m-auto">
      <form action="" className="mx-auto grid max-w-md grid-cols-1 gap-4">
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
