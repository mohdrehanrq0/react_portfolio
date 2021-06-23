import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function PortCard(props) {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          background: '#364f6b',
          color: '#fff'
        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();
    return (
        <>
             <Card className={classes.root} id="card_main_wrap">
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.image_title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {props.head}
                        </Typography>
                        <Typography variant="body2" component="p" style={{textAlign: "justify"}}>
                            {props.head_text}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" style={{color: "#fff", background: "rgba(0,0,0,0.3)", padding: "3px 20px" }}>
                        GitHub
                        </Button>
                        <Button size="small" style={{color: "#fff", background: "rgba(0,0,0,0.3)", padding: "3px 20px" }}>
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
        </>
    )
}

export default PortCard
