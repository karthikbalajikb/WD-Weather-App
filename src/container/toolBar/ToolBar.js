import React from 'react';
import WDAppBar from "../../components/appBar/AppBar";

class ToolBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { city: '' }
    }

    selectedCity = city => { this.props.selectedCity(city); }
    render() {
        return (
            <WDAppBar selectedCity={this.selectedCity} />
        )
    }
}

export default ToolBar;