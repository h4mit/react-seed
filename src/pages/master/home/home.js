import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import homeTranslations from "./i18n/home.json";
import { withLocalize, Translate } from 'react-localize-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.props.addTranslation(homeTranslations);
    this.state = {
      news: [],
      count: 0
    }
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0d1e6b7175e4217aa4414a8af3ab4df`)
      .then(res => {
        console.log(res)
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
    const { classes } = this.props;
    console.log(this.state)

    const imagePost = (image) => {
      if (image) return <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile" />
    }
    const posts = this.state.news.map((post, index) =>
      <Card className={classes.card} key={index}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={post.publishedAt}
        />
        {imagePost(post.urlToImage)}
        <CardContent>
          <Typography component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
    return (
      <div>
        <Translate>
          {({ translate }) => <h1>{translate("HOME.today", { date: Date.now() })}</h1>}
        </Translate>
        <hr />
        <Translate>
          {({ translate }) => <h1>{translate("HOME.wlc")}</h1>}
        </Translate> <br />
        <Button variant="contained" color="primary" href="/home/contact">
          Contact
          </Button> &nbsp;
          <Button variant="contained" color="primary" href="/home/map">
          Map
          </Button> &nbsp;
          <Button variant="contained" color="primary" href="/dashboard">
          Dashboard
          </Button>
        <hr />
        {posts}
      </div>
    );
  }
}

export default withStyles(styles)(withLocalize(HomePage));
