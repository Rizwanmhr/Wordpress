import React from 'react'
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";
 
  import moment from 'moment'
  
const Post = ({post,images}) => {
    return (
        <>
          <Col key={post.id}>
          <Card>
              <CardImg width='30%' src={images.guid.rendered} alt='post-img' />
               <CardBody>
                   <CardTitle tag='h5'>{post.title.rendered}</CardTitle>
                       <CardText dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                       </CardText>
                       <CardSubtitle tag='h6' className='mb-2'>
                       {moment(post.modified).format("MMMM Do YYYY, h:mm:s a")}
                       </CardSubtitle>

               </CardBody>   
          </Card>
          </Col>  
        </>
    )
}

export default Post
