import classes from '../events/event-details.module.css';

export default function EventDetails(props) {
    const { title, discription, image, date, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedAddress = location.replace(', ', '\n');
      const gobacklink = '/events';

    return (
<section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
            <p class="mb-4">{discription}</p>
            <time>{humanReadableDate}</time>
            <address>{formattedAddress}</address>
        </div>
        <div class="mt-8">
            <img class="w-full rounded-lg" src={'/' + image} alt="event images"/>
        </div>
        <a className={classes.btn} href={gobacklink}>
            <span>Go Back</span>
            <span className="">
            
            </span>
        </a>
    </div>
</section>
    )
  }