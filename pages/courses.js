import { Layout } from "../components";
import { useWithAuth } from "../hooks";

export default function Courses() {
  const { user } = useWithAuth()

  return <>{ user && <p>this is a protected page of Courses </p>}</>;
}

// eslint-disable-next-line react/display-name
Courses.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps(context) {
  // static site generation with data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      somePropFromServer: data,
    }, // will be passed to the page component as props
  };
}
