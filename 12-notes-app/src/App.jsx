import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (a) => {
    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    a.preventDefault();
    console.log("submitted by", title, details);

    setTitle("");
    setDetails("");

    console.log(title);
    console.log(details);
  };

  const removeNote = (idx) => {
    const copyTask = [...task];
    console.log("Delete Note");

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-full bg-black text-white">
      <form
        onSubmit={(a) => {
          submitHandler(a);
        }}
        className="flex items-start p-10 justify-between"
      >
        <div className="flex flex-col gap-4 items-start w-1/2">
          <h1 className="text-3xl font-bold p-10">Add Notes</h1>

          {/* 1st Input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 w-full border-2 rounded outline-none font-medium"
            value={title}
            onChange={(a) => {
              setTitle(a.target.value);
            }}
          />
          {/* 2nd Input */}
          <textarea
            className="px-5 py-2 h-32 w-full border-2 rounded outline-none font-medium"
            placeholder="Enter details"
            value={details}
            onChange={(a) => {
              setDetails(a.target.value);
            }}
          />

          <button className="bg-white active:scale-95 text-black px-5 py-2 w-full rounded outline-none font-medium">
            Add Notes
          </button>
        </div>
        <img
          src="https://webstockreview.net/images/note-clipart-study-notes-2.png"
          className="h-52"
        />
      </form>
      <div className=" p-10 lg:border-l-2  ">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-10 h-[90%] overflow-auto bg-cover bg-[url('https://png.pngtree.com/png-clipart/20221222/original/pngtree-purple-aesthetic-sticky-notes-for-journal-png-image_8795698.png')">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex flex-wrap justify-between flex-col h-52 w-40 rounded-xl bg-white text-black py-6 px-4"
              >
                <div>
                  <h3 className=" leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="text-gray-400 mt-4 leading-tight font-medium">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={(idx) => {
                    removeNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
