import EventList from '../../components/events/event-list';
import axios from '../../lib/axios';

export default function EventsPage({ events }) {
  console.log(events)
    return (
      <div>
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