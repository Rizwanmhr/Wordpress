import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Post from './Post'
const Posts = () => {
    const [posts, setPosts] = useState([])
    const [images, setImages] = useState([])
    useEffect(() => {
        const allPosts = async () => {
            const fetchPosts = await axios.get('http://localhost/newwp/wp-json/wp/v2/posts')
            console.log(fetchPosts.data)
            setPosts(fetchPosts.data)
        }
        allPosts()
    },[])

    useEffect(() => {
      const fetchImg = async () => {
    const res =  await axios(`http://localhost/newwp/wp-json/wp/v2/media`)
    console.log(res.data)
    setImages(res.data)
      // .then((res) => setImages(res.data))
      // .catch((error) => console.log(error))
      }
      fetchImg()
    },[])
    useEffect(() => {
      if(posts && images){
      posts && posts.map((post) => {
      images.map((img) => {
      if(img.guid.rendered){
      post.img = img.guid.rendered
      return img;
    }
    return post;
  })
})
      }
  
    },[])
  return (
    <>
       {
         posts && posts.map((post,i) => {
           return <Post post={post} images={images[i]} key= {post.id} />
         })
       }
    </>
  );
};

export default Posts;
