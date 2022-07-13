import React from "react";



class TeamInfo extends React.Component{
    render() {
        return (
             <article className="team">
                <div className="flex">
                    <img src={this.props.team.crestUrl} alt="team" />
                    <div>
                        <h2>{this.props.team.shortName} ({this.props.team.tla})</h2>
                        <p>{this.props.team.founded}</p>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <address>
                        <p>address : {this.props.team.address}</p>
                        <p>phone : {this.props.team.phone}</p>
                        <p>mail : {this.props.team.email}</p>
                    </address>
                </div>
                <div>
                    <h3>Info</h3>
                    <p> stade : {this.props.team.venue}</p>
                    <p>Website : {this.props.team.website}</p>

                </div>
                <p className="maj">{this.props.team.lastUpdated}</p>
             </article>
        );
    }
}

export default TeamInfo