import React from "react";
import TeamInfo from "./Components/TeamInfo";
import teams from "./teams.json"
import './style/global.css'
import Counter from "./Components/Counter";

class App extends React.Component{

  constructor(){
    super()
    this.state={
      count : 1,
    }
  }

  HandleClickPlus = () =>{
    const nowCountPlus= this.state.count+1
    if(nowCountPlus<teams.length){
      this.setState({
        count : nowCountPlus
      })
    }
  }

  HandleClickMoins = () =>{
    const nowCountMoins = this.state.count-1
    if (nowCountMoins>0){
      this.setState({
        count: nowCountMoins
      })
    }
  }

  render() {
    return (
      <main>
        <h1>Teams</h1>
        <Counter count={this.state.count} increment={this.HandleClickPlus}   substract={this.HandleClickMoins}/>
        <section>
          {teams.slice(0,this.state.count).map(team =>(
            <TeamInfo
            key = {team.shortName}
            image={team.crestUrl}
            shortname={team.shortName}
            tla={team.tla}
            adress={team.address}
            phone={team.phone}
            mail={team.email}
            founded={team.founded}
            venue={team.venue}
            Website={team.website}
            maj={team.lastUpdated}
            color={team.clubColors}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default App