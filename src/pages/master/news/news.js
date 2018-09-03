import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col, View, Mask, Fa } from 'mdbreact';
import intl from 'react-intl-universal';


class NewsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      count: 0
    }
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0d1e6b7175e4217aa4414a8af3ab4df`)
      .then(res => {
        this.setState({
          news: res.data.articles,
          count: res.data.totalResults
        });
      }).catch(error => {
        this.setState({
          isLoaded: false,
          error
        });
      });
  }



  render() {

    const postImage = (image) => {
      if(image) return <img className="img-fluid" aria-hidden src={image} alt="Sample image"/>;
      else return <img className="img-fluid" aria-hidden src="image/cover.jpeg" alt="Sample image"/>;
    }

    const posts = this.state.news.map((post, index) =>
     <Row key={index}>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            {postImage(post.urlToImage)} 
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="7">
            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="share" className="pr-2"></Fa>{ post.source.name }</h6></a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>{post.title}</strong></h3>
            <p>{ post.description }</p>
            <p>by <a><strong>{ post.author }</strong></a>, { post.publishedAt }</p>
            <Button href={ post.url } color="success" size="md" className="waves-light ">{intl.get('HOME.read_more')}</Button>
        </Col>
      </Row>
    );
    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default NewsPage;
