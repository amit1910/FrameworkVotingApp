import React, { Component } from 'react';


export default class Results extends Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    votesAngularInPercent() {
        if(this.store.getState().angular) {
            return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs )) *100
        } else {
            return 0
        }
    }

    votesReactInPercent() {
        if(this.store.getState().angular) {
            return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs )) *100
        } else {
            return 0
        }
    }

    votesVuejsInPercent() {
        if(this.store.getState().angular) {
            return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs )) *100
        } else {
            return 0
        }
    }


    votesAngularInPercentStyle() {
        return {
            width: this.votesAngularInPercent() + '%'
        }
    }

    votesReactInPercentStyle() {
        return {
            width: this.votesReactInPercent() + '%'
        }
    }

    votesVuejsInPercentStyle() {
        return {
            width: this.votesVuejsInPercent() + '%'
        }
    }

    render(){
        return (
            <div>
        <span className="badge badge-danger" style={{'font-size': 'inherit','margin-top': '15px'}}>Angular: {this.votesAngularInPercent().toFixed(3) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar bg-danger" style={this.votesAngularInPercentStyle()}>
          </div>
        </div>  

                <span className="badge badge-info" style={{'font-size': 'inherit','margin-top': '15px'}}>React : {this.votesReactInPercent().toFixed(3) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar bg-info" style={this.votesReactInPercentStyle()} >
                    </div>
                </div>

                <span className="badge badge-success" style={{'font-size': 'inherit','margin-top': '15px'}}>Vuejs : {this.votesVuejsInPercent().toFixed() + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar bg-success" style={this.votesVuejsInPercentStyle()} >
                    </div>
                </div>

            </div>
        );
    }


}