import React from "react";



class TeamInfo extends React.Component{
    render() {
        return (
             <article className="team">
                <div className="flex">
                    <img src={this.props.image} alt="team" />
                    <div>
                        <h2>{this.props.shortname} ({this.props.tla})</h2>
                        <p>{this.props.founded}</p>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <address>
                        <p>address : {this.props.address}</p>
                        <p>phone : {this.props.phone}</p>
                        <p>mail : {this.props.mail}</p>
                    </address>
                </div>
                <div>
                    <h3>Info</h3>
                    <p> stade : {this.props.venue}</p>
                    <p>Website : {this.props.Website}</p>

                </div>
                <p className="maj">{this.props.maj}</p>
             </article>
        );
    }
}

export default TeamInfo