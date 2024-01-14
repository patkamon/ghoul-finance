export default function Form(props) {
  return (
    <div
      className={`bg-purple2 border-white rounded-xl m-auto fixed top-32 py-5 z-10 px-20 flex flex-col gap-1
    transform scale-150 duration-300 transition-transform ${props.blur}`}
    >
      <img src="ghoul.png" className="w-32 h-32"></img>
      <button
        onClick={() => props.setBlur(false)}
        className="bg-[#D9D9D9] rounded-lg"
      >
        Cancel
      </button>
      <button className="bg-green rounded-lg">Submit</button>
    </div>
  );
}
