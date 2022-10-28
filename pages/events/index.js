import axios from '../../lib/axios';
import { useRouter } from 'next/router';

import EventsSearch from '../../components/events/event-search';
import EventList from '../../components/events/event-list';

export default function EventsPage(props) {
  const router = useRouter();
  const { events } = props;
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  console.log(events)
    return (
      <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
      </div>
    )
  }
  export async function getStaticProps() {

    const response = await axios.get("http://127.0.0.1:8000/api/events");
    return {
        props: {
            events: response.data
        },
    }
  }