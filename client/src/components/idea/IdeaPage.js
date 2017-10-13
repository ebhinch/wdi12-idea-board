import React, { Component } from 'react';
import axios from "axios"
import { FlexRow } from "../../styled-components/FlexContainers"
import { FlexColumn } from "../../styled-components/FlexContainers"
import styled from 'styled-components';

const Title = FlexRow.extend`
    font-size: 22px;
    justify-content: center;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    box-shadow: 1px 1px 1px grey;

`


const IdeaPageBody = styled.div`
    margin-left: 5px;
`

const IdeaStickyContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row-wrap;
`

const IdeaSticky = FlexRow.extend`
    height: 250px;
    width: 250px;
    border: 1px solid grey;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    background-color: rgba(245, 255, 198, .5);
    padding-left: 5px;
    padding-right: 5px;
    font-family: 'Shadows Into Light Two', cursive;
`

class IdeaPage extends Component {
    state = {
        user: {
            userName: "",
            password: "",
            ideas: []
        }
    }

    async componentWillMount() {
        // console.log(this.props.match.params.userId)

        const { userId } = this.props.match.params

        const response = await axios.get(`/api/users/${userId}`)
        console.log(response.data)
        this.setState({user: response.data})

    }
    render() {
        return (
            <IdeaPageBody>
                <Title>{this.state.user.userName}'s Idea Board</Title>
                <IdeaStickyContainer>
                 {this.state.user.ideas.map((idea) => {
                    return (
                        <IdeaSticky>
                        <div key={idea._id}>
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                            
                        </div>
                        </IdeaSticky>
                    )
                })}
                </IdeaStickyContainer>
            </IdeaPageBody>
        );
    }
}

export default IdeaPage;