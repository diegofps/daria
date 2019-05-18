
class MyModule {
    
    groupAdultsByAgeRange(people)
    {
        console.log(people)
        
        const temp = people.reduce((categories, currentPerson) => {
            if (currentPerson.age <= 20 && currentPerson.age >= 18) {
                categories['20 and younger'].push(currentPerson)
                return categories
            } 
            
            if (currentPerson.age >=21 && currentPerson.age < 31){
                categories['21-30'].push(currentPerson)
                return categories
            } 
            
            if (currentPerson.age >=31 && currentPerson.age < 41){
                console.log(categories);
                categories['31-40'].push(currentPerson)
                return categories
            } 
            
            if (currentPerson.age >= 41 && currentPerson.age < 51){
                categories['41-50'].push(currentPerson)
                return categories
            } 

            if (currentPerson.age >= 51){
                categories['51 and older'].push(currentPerson)
                return categories
            }
            
            return categories
        },
        {
            '20 and younger' : [],
            '21-30' : [],
            '31-40' : [],
            '41-50' : [],
            '51 and older': []
        });
        
        console.log(temp);
        
        if (temp['20 and younger'].length == 0)
            delete temp['20 and younger']
        
        if (temp['21-30'].length == 0)
            delete temp['21-30']
        
        if (temp['31-40'].length == 0)
            delete temp['31-40']
        
        if (temp['41-50'].length == 0)
            delete temp['41-50']
            
        if (temp['51 and older'].length == 0)
            delete temp['51 and older']
            
        console.log(temp);
        
        return temp
    }
    
}

module.exports = new MyModule()
