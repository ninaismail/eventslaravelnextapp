import EventDetails from '../../components/events/event-details';
import Comments from '../../components/comments/comments';

import axios from '../../lib/axios';
import { Fragment } from 'react';
import Head from 'next/head';

function EventDetailPage(props) {

  const event = props.selectedEvent;
  console.log(event)
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
        <Head>
        <title>{event.title}</title>
        <meta
          name='description'
          content={event.description}
        />
      </Head>
      <EventDetails
         key={event.id}
         id={event.id}
         title={event.title}
         location={event.location}
         date={event.date}
         image={event.image} 
       />
       <Comments eventId={event.id}/>
    </Fragment>
  );
}
export async function getStaticProps(context) {
  // params contains the event `id`.
  // If the route is like /events/1, then params.id is 1
  const eventId = context.params.eventid;
  const event = await axios.get(`http://127.0.0.1:8000/api/events/${eventId}`);
  return {
    props: {
      // Pass event data to the page via props
      selectedEvent: event.data
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get events
  const events = await axios.get("http://127.0.0.1:8000/api/events");
  // Get the paths we want to pre-render based on events
  const pathsWithParams =  events.data.map((event) => ({
    params: { eventid: event.id.toString()},
  }))

  // We'll pre-render only these paths at build time.
  return {
    paths: pathsWithParams,
    fallback: false
  };
}

export default EventDetailPage;