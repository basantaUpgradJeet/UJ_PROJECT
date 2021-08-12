import { Layout } from "../components";
export default function Home() {
  return (
    <>
      <h4>Home Page when user hits the url</h4>
      <p>
        this is the page that will have some info about the company and this is SSR
      </p>
    </>
  );
}

// eslint-disable-next-line react/display-name
Home.getLayout = (page) => <Layout>{page}</Layout>;

export async function getServerSideProps(context) {
  // static site generation with data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      somePropFromServer: data,
    }, // will be passed to the page component as props
  };
}
