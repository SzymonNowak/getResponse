import React, { Component } from 'react';
import MealCalendar from '../MealCalendar/MealCalendar';
import TopBar from '../TopBar/TopBar';
import DayMealService from '../../../services/dayMealsService';
import { tab } from '../../../services';




class MealPlan extends Component {

    state = {
        weekCounter: 1,
        data : "" 

    }

    componentWillMount() {
        DayMealService.getSevenDays()
       this.setState({
           data: tab,
       })
      
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
                <TopBar weekCounter={this.state.weekCounter} click={this.handleWeekChange} />
                <MealCalendar meals={this.state.data}/>
            </>
        )
    }
}



export default  MealPlan