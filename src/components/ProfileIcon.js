export default function ProfileIcon()  {
  return (
    <div className='p-5 shadow-md max-w-xl border-2 rounded-md'>
        <div className="bg-slate-300 rounded-full w-20 p-5 mb-10 mx-auto">
            <i className="fa-regular fa-user text-4xl"></i>
        </div>
        <div className="mb-10">
            <h3 className="text-lg font-medium">Team Ts <span><i class="fa-solid fa-pen text-sm text-sky-500 cursor-pointer"></i></span></h3>
            <p>Team.ts.email.com</p>
        </div>
    </div>
  )
}
