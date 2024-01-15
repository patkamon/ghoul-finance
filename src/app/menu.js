export default function Menu() {
  return (
    <div className="bg-white w-3/5 grid grid-cols-3 rounded-xl border border-white">
      <div className="bg-purple1 w-full py-1 rounded-l-xl flex hover:bg-blue">
        <h1 className="text-white mx-auto text-xl"> Subscriptions</h1>
      </div>

      <div className="bg-white w-full py-1 flex hover:bg-blue ">
        <h1 className="t mx-auto text-xl"> Revenue</h1>
      </div>

      <div className="bg-purple1 w-full py-1 rounded-r-xl flex hover:bg-blue">
        <h1 className="text-white mx-auto text-xl "> Setting</h1>
      </div>
    </div>
  );
}
