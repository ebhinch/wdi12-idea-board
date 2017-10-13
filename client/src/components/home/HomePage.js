import React, { Component } from 'react';
import { FlexRow } from "../../styled-components/FlexContainers"
import { FlexColumn } from "../../styled-components/FlexContainers"
import styled from 'styled-components';

const HeaderBar = FlexRow.extend `
    font-size: 18px;
    justify-content: center;
    `


class HomePage extends Component {
    render() {
        return (
            <HeaderBar>
            <div>
                <h1>Hello from Home Page</h1>
            </div>
            </HeaderBar>
        );
    }
}

export default HomePage;