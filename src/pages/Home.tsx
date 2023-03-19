import Form from "../common/Form";

export default function Home(): JSX.Element {
  return (
    <div className="h-screen rounded-2xl border-4 border-wonder-purple">
      <div className="flex h-screen flex-col items-center rounded-xl pt-4 text-3xl text-black">
        <h1 className="rounded-xl bg-wonder-purple p-4 text-white">
          Wonder Reader
        </h1>
        <Form />
      </div>
    </div>
  );
}
