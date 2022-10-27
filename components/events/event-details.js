import classes from '../events/event-details.module.css';
import Button from '../ui/button';

export default function EventItem(props) {
    const { title, discription, image, date, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedAddress = location.replace(', ', '\n');
      const gobacklink = '/events';

    return (
    <div className={classes.item}>
      <img src={'/' + image} alt="event images"/>
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
            
            <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
            
            <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button Link={gobacklink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
            
            </span>
          </Button>
        </div>
      </div>
    </div>
    )
  }