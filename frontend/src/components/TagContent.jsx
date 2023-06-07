/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function TagContent({children, count }) {
  return (
    <>
      <Link to={`/tag/${children}`} className="flex px-3 py-1 text-sm items-center gap-2 bg-white text-black dark:bg-zinc-800 dark:text-white rounded shadow-custom transition duration-500">
        <span className="text-base">{children}</span>
        <span className="bg-slate-200 dark:bg-zinc-950 transition duration-500 w-[26px] p-1 text-center rounded-full">{count}</span>
      </Link>
    </>
  )
}