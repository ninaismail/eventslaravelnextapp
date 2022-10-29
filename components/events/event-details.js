import btnclass from '../events/event-item.module.css';

export default function EventDetails(props) {
    const { title, description, image, date, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedAddress = location.replace(', ', '\n');
      const gobacklink = '/events';

    return (
<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-4">{description}</p>
            <time>{humanReadableDate}</time>
            <address>{formattedAddress}</address>
        </div>
        <div className="mt-8">
            <img className="w-full rounded-lg" src={'/' + image} alt="event images"/>
        </div>
        <a className={btnclass.btn} href={gobacklink}>
            <span>Go Back</span>
            <span className="">
            
            </span>
        </a>
    </div>
</section>
    )
  }