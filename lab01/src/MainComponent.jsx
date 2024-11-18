import  { Component } from 'react';
import { Orichild } from './Share/listOfOrichids';
import Content from './Page/Content/Content';

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            orichild: Orichild,
        };
    }

    render() {
        return (
            <Content flowerdata={this.state.orichild} />

        );
    }
}
