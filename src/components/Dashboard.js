import React, { Component } from 'react';
import axios from 'axios';

import './Dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            user_id: 1,
            assetsToDisplay: [],
            showAssetAdder: false
        }
    }

    componentDidMount() {
        axios.get(`/api/assets/get_all/${this.state.user_id}`).then(res => {
            console.log(res.data)
            this.setState({
                assetsToDisplay: res.data
            })
        })
    }

    openAssetModal() {
        this.setState({
            showAssetAdder: !this.state.showAssetAdder
        })
        console.log(this.state.showAssetAdder)
    }

    assetRotate(num) {
        console.log(num)
    }

    render() {
        const displayAsset = this.state.assetsToDisplay.map((c, i) => {
            return (
                <button key={i} className="asset_tab" onClick={() => this.assetRotate(c.asset_id)}>
                    {c.title}
                </button>
            )
        })

        return (
            <div className="dash_main_container">
                <h2>- Header</h2>
                <div className="asset_tabs_container">
                    {displayAsset}
                    <button onClick={() => { this.openAssetModal() }} className="add_asset_button">ADD ASSET</button>
                </div>


                <p>- Category list</p>
                <p>- Log dropdown</p>
                <h2>- Footer</h2>
            </div>
        );
    }
}