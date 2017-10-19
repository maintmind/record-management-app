import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories, toggleModal, catDisp } from '../../ducks/reducer';

import Logs from '../Logs/Logs';

import './Categories.css';

class Categories extends Component {
    componentDidMount() {
        this.props.getAllCategories(this.props.user.user_id)
    }

    toggleCatDisp(num) {
        if (this.props.catView === 0) {
            this.props.catDisp(num)
        } else {
            this.props.catDisp(0)
        }
    }

    render() {
        const displayCats = this.props.categoryList.map((c, i) => {
            if (c.asset_id === this.props.assetView) {
                return (
                    <div key={i}>
                        <div key={i} className="cat_row" onClick={() => this.props.catDisp(c.cat_id)}>
                            {c.title} - {c.description}
                        </div>
                        <div className={c.cat_id === this.props.catView ? "addCat_show" : "addCat_hide"}>
                            <Logs />
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className="category_viewer">
                <button onClick={() => { this.props.toggleModal('cat') }} className={this.props.assetView === 0 ? "addCat_button addCat_hide" : "addCat_button addCat_show"}>
                    ADD CATEGORY
                </button>

                {displayCats}

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