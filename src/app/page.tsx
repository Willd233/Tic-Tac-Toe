import { Grid } from "./component/Grid/Grid";

export default function Home() {
  return (
    <main className="">
      <div className='primary-title'>
        <h1>Tic Tac Toe!</h1>
      </div>
        <div className="container-app">
          <Grid />
        </div>
        <div>
        </div>

    </main>
  )
}
