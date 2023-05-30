/* eslint-disable react/prop-types */
export default function Content({ children }) {
  return (
    <div className='py-4 grid gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4'>
      {children}
    </div>
  )
}
