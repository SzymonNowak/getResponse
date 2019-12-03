import { tab } from './index';
let isProduction = false;

   class DayMealService {
    static  getSevenDays() {
    if(isProduction) {
        ///
    } else {
        return tab.slice(0, 7)
    }

}

 static getAllMeals = () => {
    if(isProduction) {
        ///
    } else {
        return tab
    }

}

}


export default DayMealService
