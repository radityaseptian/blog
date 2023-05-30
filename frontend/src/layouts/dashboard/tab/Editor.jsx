/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../../components/Button'
import generateNode from '../generateNode'
import { NodeContext } from '../context/NodeContext'

export default function Editor() {
  let context = useContext(NodeContext)
  const [value, setValue] = useState('')
  const [content, setContent] = useState('')
  const [pseudoValue, setPseudoValue] = useState('')
  const [target, setTarget] = useState('')
  const [show, setShow] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    setValue(sessionStorage.getItem('select') || 'title')
    setContent(sessionStorage.getItem('content') || '')
    setShow(sessionStorage.getItem('show') || false)
    setPseudoValue(sessionStorage.getItem('pseudoValue') || '')
    if (sessionStorage.getItem('target') != 'img') {
      setTarget(sessionStorage.getItem('target') || '')
    } else {
      setShow(false)
    }
  }, [])
  const select = (e) => {
    setValue(e.target.value)
    sessionStorage.setItem('select', e.target.value)
    removePseudo()
  }
  const handleContent = (e) => {
    setContent(e.target.value)
    sessionStorage.setItem('content', e.target.value)
  }
  const handleTarget = (e) => {
    if (e.target.type != 'file') {
      imgRef.current.value = ''
    } else {
      setTarget(e.target.id)
      setShow(false)
      setContent('')
      setPseudoValue('')
      sessionStorage.removeItem('show')
      sessionStorage.removeItem('content')
      sessionStorage.removeItem('pseudoValue')
      return
    }
    setShow(true)
    setTarget(e.target.id)
    sessionStorage.setItem('show', true)
    sessionStorage.setItem('target', e.target.id)
  }
  const handlePseudoValue = (e) => {
    setPseudoValue(e.target.value)
    sessionStorage.setItem('pseudoValue', e.target.value)
  }
  // Pseudo
  const addPseudo = () => {
    const result = generateNode(target, pseudoValue)
    setContent(content + result)
    sessionStorage.setItem('content', content + result)
    setShow(false)
    setPseudoValue('')
    sessionStorage.removeItem('show')
    sessionStorage.removeItem('target')
    sessionStorage.removeItem('pseudoValue')
  }
  const removePseudo = () => {
    setShow(false)
    setTarget('')
    sessionStorage.removeItem('show')
    sessionStorage.removeItem('target')
    sessionStorage.removeItem('pseudoValue')
    imgRef.current.value = ''
  }

  // FUNCTION NODE HANLDER
  const saveNode = () => {
    if (target == 'img') {
      const url = URL.createObjectURL(imgRef.current.files[0])
      context.push(`<center><img id='img' src=${url} /></center>`)
      imgRef.current.value = ''
      setShow(false)
      setValue('')
      setTarget('')
      setPseudoValue('')
      setContent('')
      sessionStorage.clear()
      return
    }

    if (target == 'html, css, or javascript') {
      context.push(generateNode(target, content, pseudoValue))
      setShow(false)
      setValue('')
      setTarget('')
      setPseudoValue('')
      setContent('')
      sessionStorage.clear()
      return
    }

    if (content.length >= 3) {
      context.push(generateNode(value, content))
      setShow(false)
      setValue('')
      setTarget('')
      setPseudoValue('')
      setContent('')
      sessionStorage.clear()
    }
  }
  const removeNode = () => {
    context = []
    sessionStorage.clear()
    location.reload()
  }
  const createOne = async () => {
    if (context.length >= 1) {
      const url = 'http://localhost:3000/dashboard'
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ file: context }),
      }).finally(() => {
        sessionStorage.clear()
        location.reload()
      })
    }
  }

  return (
    <>
      <div className='bg-red-300 py-2 px-2 flex flex-col gap-2 min-h-[calc(100vh-40px)]'>
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <div className='flex items-center gap-3 flex-wrap'>
            <select
              onChange={select}
              value={value}
              className='p-2 rounded text-center cursor-pointer'
            >
              <option value='title'>Title</option>
              <option value='paragraf-title'>Paragraf-title</option>
              <option value='paragraf'>Paragraf</option>
              <option value='read-time'>Read-time</option>
              <option value='list'>List</option>
            </select>
            <div className='flex gap-3 flex-wrap items-center text-sm'>
              <span
                onClick={handleTarget}
                id='href:https://example.com text:example'
                className='bg-slate-100 px-3 py-2 rounded cursor-pointer'
              >
                Link
              </span>
              <span
                onClick={handleTarget}
                id='html, css, or javascript'
                className='bg-slate-100 px-3 py-2 rounded cursor-pointer'
              >
                Code
              </span>
              <input
                onChange={handleTarget}
                type='file'
                ref={imgRef}
                accept='image/*'
                id='img'
                className='bg-slate-100 py-2 file:border-none file:bg-transparent cursor-pointer rounded'
              />
              <span
                onClick={handleTarget}
                id='content for bg-text'
                className='bg-slate-100 px-3 py-2 rounded cursor-pointer'
              >
                Bg-text
              </span>
            </div>
          </div>
          <div className='flex gap-4'>
            <Button onClick={saveNode}>Save</Button>
            <Button
              onClick={removeNode}
              className='bg-red-500 hover:bg-red-500/90'
            >
              Cancel
            </Button>
            <Button
              onClick={createOne}
              className='bg-green-500 hover:bg-green-500/90'
            >
              Create
            </Button>
          </div>
        </div>
        {show && (
          <div className='flex items-center gap-2 flex-wrap'>
            {target != 'html, css, or javascript' && (
              <span
                onClick={addPseudo}
                className='cursor-pointer px-2 py-[.39rem] text-white bg-primary rounded text-sm'
              >
                Add
              </span>
            )}
            <span
              onClick={removePseudo}
              className='cursor-pointer px-2 py-[.39rem] text-white bg-red-500 rounded text-sm'
            >
              Remove
            </span>
            <input
              type='text'
              value={pseudoValue}
              onChange={handlePseudoValue}
              placeholder={target}
              className='px-2 py-1 rounded flex-1'
            />
          </div>
        )}
        <textarea
          type='text'
          value={content}
          onChange={handleContent}
          placeholder='Enter content...'
          className='px-2 py-1 rounded focus:outline-none flex-1'
        />
      </div>
    </>
  )
}
