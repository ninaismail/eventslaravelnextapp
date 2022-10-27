
import { Fragment } from 'react';
import Head from 'next/head';

function EventDetailPage(props) {
  const event = props.selectedEvent;

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

    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const ids = events.map((event) => event.id);
  //the file name is id and the data feild for id is id
  const pathsWithParams = ids.map((id) => ({ params: { id: id } }));

  return {
    paths: pathsWithParams,
    fallback: 'blocking'
  };
}

export default EventDetailPage;