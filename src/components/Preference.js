export default function Preference () {

    return(
        <div className="font-medium shadow-md text-left w-full border-2 rounded-md col-span-2">
            <div className="border-b p-2">
                <h2>My Preferences</h2>
            </div>
            <form>
                <div className="p-3 flex justify-between items-center max-w-md">
                    <label for="theme" class="text-sm font-medium">Theme Preference <span className="cursor-pointer"><i className="fa-solid fa-circle-question"></i></span></label>
                    <select id="theme" class=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5 w-60">
                        <option selected>System Default</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
                <div className="p-3 flex justify-between items-center max-w-md">
                    <label for="page" class="text-sm font-medium">Select an option</label>
                    <select id="page" class="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5  w-60">
                        <option selected>My Profile</option>
                        <option value="page-1">Page 1</option>
                        <option value="page-2">Page 2</option>
                    </select>
                </div>
            </form>
        </div>
        
    )
}