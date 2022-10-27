import classes from '../events/event-item.module.css';
import Button from '../ui/button';

export default function EventItem(props) {
    const { id, title, image, date, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;  

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
          <Button Link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
            
            </span>
          </Button>
        </div>
      </div>
    </div>
    )
  }