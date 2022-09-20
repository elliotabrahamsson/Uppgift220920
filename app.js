var Customers = [];
var Person = {
    Name:'',
    Phone:'',
    Adress:''
}

Add = () => {
    FullName = document.getElementById('namn').value;
    PhoneNmbr = document.getElementById('telefonnummer').value;
    RecAdress = document.getElementById('Leveransadress').value;
    Person = {Name: FullName, Phone: PhoneNmbr, Adress: RecAdress};
    Customers.push(Person);

    CustomerList = document.getElementById('customers');

    CustomerList.innerHTML ='';

    Customers.forEach (person => {
        NameDetail = document.createElement('li');
        NameDetail.innerHTML = 'Personnamn: ' + person.Name;
        CustomerList.appendChild(NameDetail);

        PhoneDetail = document.createElement('li');
        PhoneDetail.innerHTML = 'Telefonnummer: ' + person.Phone;
        CustomerList.appendChild(PhoneDetail);

        Space = document.createElement('br');
        Space.innerHTML = ' ';
        CustomerList.appendChild(Space);
    });

}
