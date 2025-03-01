var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getrandominit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var Productarray = new Array(getrandominit(5, 12));
for (var i = 0; i < Productarray.length; i++) {
    Productarray[i] = { id: i, name: "Product-".concat(Math.round(i * Math.PI)), price: getrandominit(10, 100) };
}
var filterAffordableProducts = function (minprice) {
    var answer = Productarray.filter(function (v) { return v.price < minprice; });
    return answer;
};
var student = new Array(getrandominit(5, 12));
var getgrades = function () {
    var result = new Array(getrandominit(12, 36));
    for (var i = 0; i < result.length; i++) {
        result[i] = getrandominit(10, 100);
    }
    return result;
};
var addStudent = function (obj) {
    student = __spreadArray(__spreadArray([], student, true), [obj], false);
};
for (var i = 0; i < student.length; i++) {
    student[i] = { name: "Student-".concat(Math.round(i), ".00"), grades: getgrades() };
}
var car = { make: 'nissan', model: 'skyline r34', year: 98 };
var updateCarYear = function (obj, newyear) {
    obj.year = newyear;
};
var orders = new Array(getrandominit(5, 12));
var getOrderItemarrray = function () {
    var orderItem = new Array(getrandominit(5, 12));
    for (var i = 0; i < orderItem.length; i++) {
        orderItem[i] = { productId: i, quantity: getrandominit(0, 100) };
    }
    return orderItem;
};
for (var i = 0; i < orders.length; i++) {
    orders[i] = { orderId: i, customerName: "customer-".concat(Math.round(i * Math.PI)), items: getOrderItemarrray() };
}
var calculateTotalItems = function (orderId) {
    return orders[orderId].items.length;
};
var employees = new Array(getrandominit(5, 12));
for (var i = 0; i < employees.length; i++) {
    employees[i] = { id: i, name: "Employee-".concat(Math.round(i * Math.PI)), department: "".concat(getrandominit(0, 5), "-st department"), salary: getrandominit(1000, 100000) };
}
var groupByDepartment = function () {
    var obj = {};
    for (var i = 0; i < employees.length; i++) {
        if (!obj[employees[i].department]) {
            obj[employees[i].department] = [];
        }
        obj[employees[i].department] = __spreadArray(__spreadArray([], obj[employees[i].department], true), [employees[i]], false);
    }
    return obj;
};
var render = function () {
    console.log('render called');
    if (group)
        group.style.display = 'none';
    var employeesElement = document.querySelector('.employees');
    var Christobject = groupByDepartment();
    if (employeesElement) {
        employeesElement.innerHTML = '';
    }
    for (var i = 0; i < Object.keys(Christobject).length; i++) {
        var text = '';
        for (var j = 0; j < Christobject[Object.keys(Christobject)[i]].length; j++) {
            text += "\n    <div class=\"employee\">\n        <p class=\".id\">Id: <b>".concat(Christobject[Object.keys(Christobject)[i]][j].id, "</b></p>\n        <p class=\".name\">Name: <b>").concat(Christobject[Object.keys(Christobject)[i]][j].name, "</b></p>\n        <p class=\".salary\">Salary: <b>").concat(Christobject[Object.keys(Christobject)[i]][j].salary, "</b></p>\n    </div>");
        }
        if (employeesElement) {
            employeesElement.innerHTML += "<div>\n                <h2>".concat(Object.keys(Christobject)[i], "</h2>\n                ").concat(text, "\n                </div>");
        }
    }
};
var confirmObject = document.querySelector('#confirm');
var newnameObject = document.querySelector('#newname');
var departmentObject = document.querySelector('#newdepartment');
var salaryObject = document.querySelector('#newsalary');
confirmObject === null || confirmObject === void 0 ? void 0 : confirmObject.addEventListener('click', function () {
    console.log('confirm clicked');
    if (!(newnameObject === null || newnameObject === void 0 ? void 0 : newnameObject.value)) {
        alert('enter a name!!!!');
        return 0;
    }
    if (!(departmentObject === null || departmentObject === void 0 ? void 0 : departmentObject.value)) {
        alert('enter a department!!!!');
        return 0;
    }
    if (!(salaryObject === null || salaryObject === void 0 ? void 0 : salaryObject.value)) {
        alert('enter a salary!!!!');
        return 0;
    }
    employees = __spreadArray(__spreadArray([], employees, true), [{ id: (employees.length + 1), name: newnameObject === null || newnameObject === void 0 ? void 0 : newnameObject.value, department: departmentObject === null || departmentObject === void 0 ? void 0 : departmentObject.value, salary: Number(salaryObject === null || salaryObject === void 0 ? void 0 : salaryObject.value) }], false);
    render();
});
var group = document.querySelector('.group');
group === null || group === void 0 ? void 0 : group.addEventListener('click', function () { return render(); });
