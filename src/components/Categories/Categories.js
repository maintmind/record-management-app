import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories, toggleModal, catDisp } from '../../ducks/reducer';

import Logs from '../Logs/Logs';

import './Categories.css';

class Categories extends Component {
    componentDidMount() {
        this.props.getAllCategories(this.props.user.user_id)
    }

    render() {
        const displayCats = this.props.categoryList.map((c, i) => {
            if(c.asset_id === this.props.assetView){
                return (
                    <div key={i} className="cat_row" onClick={() => this.props.catDisp(c.cat_id)}>
                        {c.title} - {c.description}
                    </div>
                )
            }
        })

        return (
            <div className="category_viewer">
                <button onClick={() => {this.props.toggleModal('cat')}} className={this.props.assetView === 0 ? "addCat_hide" : "addCat_show"}>ADD CATEGORY</button>

                {displayCats}

                <Logs />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}
const outputActions = {
    getAllCategories,
    toggleModal,
    catDisp
}

export default connect(mapStateToProps, outputActions)(Categories);