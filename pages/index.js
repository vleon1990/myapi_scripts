import React, { useState } from 'react';
import Categorias from '../components/categorias';
import Footer from '../components/footer';
import Layout from '../components/layout'

function Home({posts}) {

  const [filteredPosts, setFilteredPosts] = useState(
    posts.slice(0, 20)
  );

  function handleFilterBySearch (search) {

    if (search.trim().length > 0) {
      setFilteredPosts(
        posts.filter((post) =>
          post.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredPosts(posts.slice(0, 20));
    }

  }
  
  const [sPx, setPX] = useState(true)

  const pinchar = () => setPX(false)

  return (
    <Layout>
      <h1 className=" text-2xl md:text-5xl font-bold text-text-primary text-center tracking-wide p-4">
          Welcome to <a href="https://myapi-scripts-vleon1990.vercel.app/">scripting!</a>
      </h1>
      <p className=" text-2xl md:text-5xl text-center p-4 tracking-wide">
        Share and search{' '}
        <code className='bg-[#72dd6e]' >your/scripts.x</code>
      </p>

      <div className="flex justify-center">
          <input
            className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
            id="name"
            type="text"
            placeholder="Search for a script"
            onChange={(e) => handleFilterBySearch(e.target.value)}
            onClick={pinchar}            
          />
        </div>

        {
          sPx && (
            <Categorias />
          )
        }
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		      {filteredPosts.map((post, i) => (
          <div className="bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col items-center"  key={i}>
            <span className=" text-4xl md:text-5xl mb-2" role={'img'} aria-label={post.image?.secure_url}>
            <img src={post.image?.secure_url}/>
            </span>
            <h2 className="text-center font-bold text-text-primary">{post.name}</h2>
            <p className="text-center  text-text-secondary">{post.description}</p>
            <button className='text-center text-blue-500 text-sm pt-3 '>more info &rarr;</button>
          </div>
		      )).slice(0,20)}
        </div>
        <Footer />
    </Layout>
    
  )
}

  export async function getStaticProps() {
      
    const res = await fetch('https://afternoon-journey-26751.herokuapp.com/api/products')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }

export default Home
