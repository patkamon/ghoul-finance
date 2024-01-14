export default function Transaction() {
  return (
    <div className="mx-auto mb-2 bg-[#D9D9D9] w-4/5 rounded-xl text-2xl grid grid-cols-3">
      <div className="ml-auto flex">
        <img src="check.png" className="h-6 w-6 m-1"></img>
        <div> 1/12/2023</div>
      </div>

      <div className="mx-auto">NETFLIX</div>
      <div className="mr-auto">15$</div>
    </div>
  );
}
