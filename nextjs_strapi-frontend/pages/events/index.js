import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import {API_URL} from '@/config/index'

export default function EventsPage({events}) {
  console.log(events);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) =>(
        <EventItem key={evt.id} evt={evt}/>
      ))}
    </Layout>
  )
}

export async function getStaticProps(){

  const res = await fetch(`${API_URL}/events?_sort=date:ASC`)
  const events = await res.json()

  console.log(events);

  return{
    props: {events},
    revalidate: 1,
  }
}
