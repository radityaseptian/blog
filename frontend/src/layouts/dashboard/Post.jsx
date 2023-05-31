/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import Content from '../Content'
import Card from './components/Card'
import { PostContext } from './context/PostContext'

export default function Post() {
  const context = useContext(PostContext)
  const url = 'http://localhost:3000/dashboard/'

  const deletePost = async (id) => {
    await fetch(url + id, {
      method: 'DELETE',
    }).finally(() => {
      const newPost = context.post.filter((list) => list._id != id)
      context.setPost(newPost)
    })
  }

  return (
    <>
      <section className='px-3'>
        {context.post.length > 0 ? (
          <Content>
            {context.post.map((item) => {
              return (
                <>
                  <Card
                    key={item._id}
                    title={item.title}
                    tag={item.tag}
                    read={item.time}
                    onClick={() => deletePost(item._id)}
                  />
                </>
              )
            })}
          </Content>
        ) : (
          <div className='grid place-content-center min-h-screen'>
            <h1 className='text-6xl'>EMPTY!</h1>
          </div>
        )}
      </section>
    </>
  )
}
