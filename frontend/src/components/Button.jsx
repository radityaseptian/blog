/* eslint-disable react/prop-types */
export default function Button(props) {
  const {className = 'bg-primary hover:bg-primary/90'} = props 
  return <button {...props} className={`${className} px-4 py-2 text-sm text-white rounded`}>{props.children}</button>
}
