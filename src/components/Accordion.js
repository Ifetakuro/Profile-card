export default function Accordion() {
  return (
    <div className="col-span-3 shadow-md border-2 rounded-xl text-left">
      <h2>
        <button
          className="flex items-center gap-4 w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
        >
          <i className="fa-solid fa-chevron-down"></i>
          <span>Manage Social Media Connections</span>
        </button>
      </h2>
      <div>
        <div className="p-5 font-light border flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-48 border-2 rounded-md p-3 bg-sky-500">
              <span className="text-white text-3xl">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </div>
            <div className="w-48 border-2 rounded-md p-3">
              <span className="text-sky-500 text-3xl">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="w-48 border-2 rounded-md p-2 flex gap-1 items-center">
              <span className="text-sky-500 text-3xl border-2 rounded-full px-3 py-1">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <span className="ml-1">Link Facebook</span>
            </div>
            <div className="w-48 border-2 rounded-md p-2 flex gap-1 items-center justify-between">
              <span className="text-sky-500 text-3xl border-2 rounded-full px-3 py-1">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <div>
                <p className="text-xs">Signed in as</p>
                <p className="text-sm font-medium">Team.sterwt</p>
              </div>
              <div>
                <p className="text-xs">d..</p>
                <p className="text-red-600 ">
                  <i className="fa-solid fa-trash-can cursor-pointer"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <button
          className="flex items-center gap-4  w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200"
        >
          <i className="fa-solid fa-chevron-right"></i>
          <span>Manage Companies</span>
        </button>
      </h2>
      <h2>
        <button
          className="flex items-center gap-4 w-full p-5 font-medium text-left text-gray-500 border border-b-1 border-gray-200 focus:ring-4 focus:ring-gray-200 rounded-b-xl"
        >
          <i className="fa-solid fa-chevron-right"></i>
          <span>Feature Management</span>
        </button>
      </h2>
    </div>
  );
}
