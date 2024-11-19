import { useState } from "react";
import Draggable from "react-draggable";
import { useUndoRedo } from "@anandarizki/use-undo-redo";

const App = () => {
  const [value, setValue] = useState({
    textBoxes: [],
    fontFamily: null,
    fontSize: 15,
    bold: false,
    italic: true,
    underline: false,
  });

  const [onClickUndo, onClickRedo] = useUndoRedo([value, setValue]);

  const onClickIncrementFontSize = () => {
    if (value.fontSize >= 15 && value.fontSize <= 49) {
      setValue({ ...value, fontSize: value.fontSize + 1 });
    }
  };

  const onClickDecrementFontSize = () => {
    if (value.fontSize > 15) {
      setValue({ ...value, fontSize: value.fontSize - 1 });
    }
  };

  const onChangeFontFamily = (e) => {
    setValue({ ...value, fontFamily: e.target.value });
  };

  const onClickAddText = () => {
    setValue({ ...value, textBoxes: value.textBoxes.push("Add Text here") });
  };

  const onClickBold = () => {
    setValue({ ...value, bold: !value.bold });
  };

  const onClickItalic = () => {
    setValue({ ...value, italic: !value.italic });
  };

  const onClickUnderline = () => {
    setValue({ ...value, underline: !value.underline });
  };

  return (
    <div className="font-[Gabarito] h-screen bg-slate-100 flex flex-row items-center justify-center">
      <div className="w-[80%] lg:w-[50%] flex flex-col items-center">
        {/*WorkSpace with user Interaction*/}
        <ul className="relative bg-white w-[90%] md:w-[80%] h-80 md:h-96 rounded-sm shadow-sm p-5">
          {value.textBoxes.map((eachTextBox) => (
            <li key={eachTextBox.index}>
              <Draggable bounds={{ left: 0, top: 0, right: 460, bottom: 320 }}>
                <input
                  style={{ fontSize: `${value.fontSize}px` }}
                  type="text"
                  className={`${value.fontFamily} ${
                    value.bold ? "font-bold" : null
                  } 
                  ${value.italic ? "italic" : null} ${
                    value.underline ? "underline" : null
                  } min-w-20 max-w-80 absolute bg-transparent rounded-sm focus:outline-none hover:cursor-move placeholder:text-stone-400`}
                  placeholder="Add Text here"
                />
              </Draggable>
            </li>
          ))}
        </ul>
        <div className="box-content bg-white w-full mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-evenly gap-4 p-4 rounded-md">
          {/*Font Family Selection Dropdown*/}
          <select
            onChange={onChangeFontFamily}
            className="focus:outline-none p-1 shadow-sm rounded-md border border-slate-200"
          >
            <option value="font-[Gabarito]" className="text-base">
              Font
            </option>
            <option
              value="font-[Merienda]"
              className="font-[Merienda] text-base"
            >
              Merienda
            </option>
            <option value="font-[Caveat]" className="font-[Caveat] text-base">
              Caveat
            </option>
          </select>
          {/*Font Sizing Buttons & Value*/}
          <div className="flex flex-row items-center gap-2">
            <button
              onClick={onClickDecrementFontSize}
              className="bg-slate-100 hover:bg-slate-200 rounded-full shadow-sm p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <h1>{value.fontSize}</h1>
            <button
              onClick={onClickIncrementFontSize}
              className="bg-slate-100 hover:bg-slate-200 rounded-full shadow-sm p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          {/*Text Styling Buttons*/}
          <div className="flex flex-row items-center gap-3 rounded-3xl bg-slate-100 py-2 px-4 ">
            <button
              onClick={onClickBold}
              className={`${
                value.bold ? "bg-slate-200" : "bg-white"
              } hover:bg-slate-200 rounded-full shadow-sm p-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinejoin="round"
                  d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"
                />
              </svg>
            </button>
            <button
              onClick={onClickItalic}
              className={`${
                value.italic ? "bg-slate-200" : "bg-white"
              } hover:bg-slate-200 rounded-full shadow-sm p-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
                />
              </svg>
            </button>
            <button
              onClick={onClickUnderline}
              className={`${
                value.underline ? "bg-slate-200" : "bg-white"
              } hover:bg-slate-200 rounded-full shadow-sm p-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5"
                />
              </svg>
            </button>
          </div>

          {/*Undo and Redo Buttons*/}
          <div className="flex flex-row items-center gap-2">
            <button
              onClick={onClickUndo}
              className="flex flex-col items-center justify-center gap-1 hover:bg-slate-100 py-1 px-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              <span className="text-xs">Undo</span>
            </button>
            <button
              onClick={onClickRedo}
              className="flex flex-col items-center justify-center gap-1 hover:bg-slate-100 py-1 px-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                />
              </svg>
              <span className="text-xs">Redo</span>
            </button>
          </div>

          {/*Add Text Button*/}
          <button
            onClick={onClickAddText}
            className="flex flex-row items-center gap-1 text-sm hover:bg-blue-500 bg-blue-600 text-white rounded-3xl py-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="white"
              height="13px"
              width="13px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 25.531 25.531"
              xml:space="preserve"
            >
              <g>
                <g id="c179_text">
                  <path d="M25.198,6.273c-0.014,0.23-0.045,0.389-0.087,0.467c-0.045,0.084-0.176,0.145-0.392,0.183    c-0.469,0.104-0.781-0.074-0.935-0.533C23.239,4.7,22.59,3.578,21.84,3.016c-1.041-0.773-2.862-1.161-5.469-1.161    c-1.054,0-1.633,0.115-1.734,0.343c-0.036,0.075-0.057,0.184-0.057,0.324v18.999c0,0.812,0.188,1.383,0.571,1.709    c0.382,0.32,1.069,0.731,2.201,0.999c0.483,0.103,0.97,0.2,1.034,0.239c0.46,0,0.504,1.057-0.376,1.057    c-0.025,0.016-10.375-0.008-10.375-0.008s-0.723-0.439-0.074-1.023c0.271-0.121,0.767-0.343,0.767-0.343s1.83-0.614,2.211-1.009    c0.434-0.445,0.648-1.164,0.648-2.154V2.521c0-0.369-0.229-0.585-0.687-0.647c-0.049-0.015-0.425-0.02-1.122-0.02    c-2.415,0-4.191,0.418-5.338,1.259C3.176,3.735,2.411,4.877,1.737,6.545C1.52,7.065,1.22,7.234,0.84,7.058    C0.408,6.957,0.251,6.719,0.363,6.353c0.445-1.374,0.668-3.31,0.668-5.814c0-0.292,0.387-0.586,1.163-0.533L23.56,0.064    c0.709-0.104,1.096,0.012,1.16,0.343C25.076,2.096,25.234,4.052,25.198,6.273z" />
                </g>
                <g id="Capa_1_282_"></g>
              </g>
            </svg>
            Add Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
