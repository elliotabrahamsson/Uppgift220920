var Customers = [];
var Person = {
    Name:'',
    Phone:'',
    Adress:'',
    Email: ''
}

Add = () => {
    FullName = document.getElementById('namn').value;
    PhoneNmbr = document.getElementById('telefonnummer').value;
    RecAdress = document.getElementById('Leveransadress').value;
    Email = document.getElementById('Email').value;
    Person = {Name: FullName, Phone: PhoneNmbr, Adress: RecAdress, Email: Email};
    Customers.push(Person);

    CustomerList = document.getElementById('customers');

    CustomerList.innerHTML ='';

    Customers.forEach (person => {
        NameDetail = document.createElement('li');
        NameDetail.innerHTML = 'Information has been added';
        CustomerList.appendChild(NameDetail);

        Space = document.createElement('br');
        Space.innerHTML = ' ';
        CustomerList.appendChild(Space);
    });

}

Search = () => {
    var Search = document.getElementById('search').value;
    var outprint = document.getElementById('outprint');

    Search -= 1;
    outprint.innerHTML = Customers.toString(outprint);
}