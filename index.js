// Write your solution in this file!
const employee = {
    name: "Tim",
    streetAddress: "11 st"
}

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = { ...obj }

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key]=value;
    
    return obj;
}

function deleteFromEmployeeByKey(obj,key,value) {
    const newObj = {...obj}

    delete newObj.name;

    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
    delete employee.name;

    return employee
}