/* eslint-disable no-case-declarations */
export default function generateNode(target, content = '', optional) {
  if (content.length >= 3) {
    switch (target) {
      case 'title':
        return `<h1 class='text-4xl md:text-5xl leading-snug md:leading-tight font-semibold font-sans'>${content}</h1>`
      case 'paragraf-title':
        return `<h2 class='pt-8 text-2xl font-semibold text-black/90 dark:text-white/90 transition duration-500'>${content}</h2>`
      case 'paragraf':
        return `<p class='pt-5 text-lg [&>span]:bg-sky-200 [&>span]:dark:text-black/80 [&>a]:relative [&>a]:after:absolute [&>a]:after:bg-yellow-300 [&>a]:after:-bottom-1 [&>a]:after:left-0 [&>a]:after:-right-[1px] [&>a]:after:rounded-full [&>a]:after:top-[22px]'>${content}</p>`
      case 'read-time':
        return `<div class='flex gap-8 items-center py-6 text-sm text-black/70 dark:text-white/80 transition duration-500'>
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
      // FOR PSEUDO NODE
      case 'href:https://example.com text:example':
        const href = `${content}`
        const pola1 = /href:(\S+)/
        const hasil1 = href.match(pola1)
        const teks = `${content}`
        const pola2 = /text:(\S+)/
        const hasil2 = teks.match(pola2)
        return `<a href='${hasil1[1]}' target='_blank'>${hasil2[1]}</a>`
      case 'html, css, or javascript':
        return `<div class='Code pt-2'><pre><code class='language-${optional}'>${content}</code></pre></div>`
      case 'content for bg-text':
        return `<span>${content}</span>`
    }
  }
}
