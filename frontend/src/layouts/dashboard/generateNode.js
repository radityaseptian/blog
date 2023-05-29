// import img from '../../../../../../../../Downloads/portfolio.png'
// import Code from '../components/Code'

export default function generateNode(target, content) {
  if (content.length >= 3) {
    switch (target) {
      case 'title':
        return `<h1 class='text-4xl md:text-5xl leading-snug md:leading-tight font-semibold font-sans'>${content}</h1>`
      case 'paragraf-title':
        return `<h2 class='pt-8 text-2xl font-semibold text-black'>${content}</h2>`
      case 'paragraf':
        return `<p class='pt-5 text-lg'>${content}</p>`
      case 'read-time':
        return `<div class='flex gap-8 items-center py-6 text-sm text-black/70'>
        <span>
          <i class='fa fa-calendar pr-1'></i>
          <span>
            ${new Date(Date.now()).toDateString().slice(4, 100)}
          </span>
        </span>
        <span>
          <i class='fa fa-clock pr-1'></i>
          <span>${content}</span>
        </span>
      </div>`
      case 'list':
        return `<li class='list-disc mt-2 ml-7'>${content}</li>`
    }
  }
}

// <div className='flex gap-8 items-center py-6 text-sm text-black/70'>
//   <div>
//     <FontAwesomeIcon icon={faCalendar} class='text-black/70' />
//     <span class='px-1'>
//       ${new Date(Date.now()).toDateString().slice(4, 100)}
//     </span>
//   </div>
//   <span>
//     <FontAwesomeIcon icon={faClock} class='text-black/70' />
//     <span class='px-1'>${content}</span>
//   </span>
// </div>
