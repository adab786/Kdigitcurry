function Nav() {
  return (
    <>
      <div className="flex gap-6 m-3 ">
        <div className=" cursor-pointer   bg-blue-400 py-1 px-10 text-xl rounded-full    h-fit  ">
          + Add Products
        </div>
        <div className=" cursor-pointer bg-white py-1 px-10  border text-xl h-fit rounded-full">
          280/400 Products
        </div>
      </div>
      <div className="search flex gap-3 ml-2">
        <input
          type="text"
          className="border w-[40%] border-gray-400 rounded-lg p-2"
          placeholder="Search"
        />
        <button className="bg-blue-400 w-[10%] text-white p-1 rounded-lg">
          Search
        </button>
      </div>
    </>
  );
}

export default Nav;
