var Customers = [];
var Person = {
    Name:'',
    Phone:'',
    Adress:''
}

Add = () => {
    Name = document.getElementById('namn').value;
    Phone = document.getElementById('telefonnummer').value;
    Adress = document.getElementById('Leveransadress').value;
    Person = {Name: Name, Phone: Phone, Adress: Adress};
    Customers.push(Person);

    CustomerList = document.getElementById('customers');

    CustomerList.innerHTML ='';

    Customers.forEach (person => {
        NameDetail = document.createElement('li');
        NameDetail.innerHTML = person.Name;
        CustomerList.appendChild(NameDetail);

        PhoneDetail = document.createElement('li');
        PhoneDetail.innerHTML = person.Phone;
        CustomerList.appendChild(PhoneDetail);

        AdressDetail = document.createElement('li');
        AdressDetail.innerHTML = person.Adress;
        CustomerList.appendChild(AdressDetail);
    });
}
