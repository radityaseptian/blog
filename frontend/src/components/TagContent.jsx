/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function TagContent({children, count, href }) {
  return (
    <>
      <Link to={href} className="flex px-3 py-1 text-sm items-center gap-2 text-white bg-slate-400 rounded shadow-custom">
        <span className="text-base">{children}</span>
        <span className="bg-slate-500 w-[26px] p-1 text-center rounded-full">{count}</span>
      </Link>
    </>
  )
}