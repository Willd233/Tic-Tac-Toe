import { Grid } from "./component/Grid/Grid";

export default function Home() {
  return (
    <main className="">
     <div className='primary-title'>
      <h1> 3 in a row!</h1>
     </div>
     <div className="container-app">
        <Grid />
     </div>
    </main>
  )
}
