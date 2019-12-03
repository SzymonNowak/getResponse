import React, { Component } from 'react';
import styled from 'styled-components';
import MealCalendar from '../MealCalendar/MealCalendar';
import TopBar from '../TopBar/TopBar';





class MealPlan extends Component {

    state = {
        weekCounter: 1,

    }



    handleWeekChange = (change) => {
    this.setState(
                {
                    weekCounter: this.state.weekCounter + change ,
                }
            )
    }

    render() {
        return (
            <>
                <TopBar weekCounter={this.state.weekCounter} click={this.handleWeekChange}/>
                <MealCalendar/>
            </>
        )
    }
}



export default  MealPlan