import { Grid } from "./component/Grid/Grid";
import { StartButton } from "./component/StartButton/StartButton";
import { Timer } from "./component/TurnTimer/timer";
import { TurnX } from "./component/TurnX/TurnX";
import { TounY } from "./component/TurnY/TurnY";

export default function Home() {
  return (
    <main className="">
      <div className='primary-title'>
        <h1>Tic Tac Toe!</h1>
      </div>
      <div className="container">
        <TurnX />
        <div className="container-app">
          <Grid />
        </div>
        <div>
          <TounY />
        </div>

      </div>
    </main>
  )
}
