import classes from './results-title.module.css';
import btnclass from '../events/event-item.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1><br/>
      <a className={btnclass.btn} href='/events'>Show all events</a>
    </section>
  );
}

export default ResultsTitle;