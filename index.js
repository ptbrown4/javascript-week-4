var user1 = {
    firstName: 'Terry',
    lastName: 'Brown',
    age: 29
};

var user2 = {
    firstName: 'Nate',
    lastName: 'Rake',
    age: 30
};

var guestList = [
    'old',
    'new',
    'barrowed',
    'red'
];

// console.log(guestList[2]);

var userList = [
    user1,
    user2
];

// console.log(userList[1].firstName);

var addressBook = [
    entry1 = {firstName: 'Sarah', 
    lastName: 'Brown', 
    address: '1806 Dorchester Place, Nichols Hills, OK 73120',
    phone: 4058309185},

    entry2 = {firstName: 'Nate', 
    lastName: 'Rakestraw', 
    address: '1234 Trash Lane, OKC, OK 73116',
    phone: 405765839},

    entry3 = {firstName: 'Bob', 
    lastName: 'Rockers', 
    address: '5678 DoNotKnow Street, Norman, OK 73678',
    phone: 4058309986},

    entry4 = {firstName: 'Tom', 
    lastName: 'Brady', 
    address: '5556 Championship Drive, Boston, MA 12345',
    phone: 4058303333},

    entry5 = {firstName: 'JJ', 
    lastName: 'Redick', 
    address: '9876 Duke Boulevard, Durham, NC 74638',
    phone: 4058307352},

    entry6 = {firstName: 'Chris', 
    lastName: 'Espinosa', 
    address: '7786 College Ave, Bethany, OK 73008',
    phone: 4058300990}
];

function printFirstNames(add){
    for(var i=0; i < add.length; i++){
        console.log(add[i].firstName)
    };
    for(var j=0; j < add.length; j++){
        console.log(add[j].address)
    };
    for(var k=0; k < add.length; k++){
        console.log(add[k].phone)
    };
};

// function printContact(x){
//     for(var i=0; i < x.length; i++){
//         console.log(x[i])
//     }
// }

var ourFunction = function(thing){
for(var i = 0; i < thing.length; i++){
    console.log(thing.lastName);
}};

function ourConsole(){
    return function(message){
        console.log('This is our message')
    }
};

// var mgs = ourConsole();

// mgs();

// printFirstNames(addressBook);

// ourFunction(addressBook);

function forEach(arr1, func1){
for(var i=0; i<addressBook.length; i++){
    func1(arr1[i]);
}};

function printName(x){
    console.log(x.firstName, x.lastName)
}

function printAddr(x){
    console.log(x.address)
}

// forEach(addressBook, printName);
// forEach(addressBook, printAddr);

// forEach(addressBook, function(x){console.log(x.phone)});

var printHello = function(){
    console.log('Hello Everyone!!!')
};

setTimeout(function(){console.log('Hello World')}, 5000);