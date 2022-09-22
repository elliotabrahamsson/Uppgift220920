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

    Customers.forEach (_person => {
        InformationDisplay = document.createElement('p');
        InformationDisplay.innerHTML = 'Added to list';
        CustomerList.appendChild(InformationDisplay);

        Space = document.createElement('br');
        Space.innerHTML = ' ';
        CustomerList.appendChild(Space);
    });

    

}

Show = () => {
    Customers.forEach (person => {
        NameDetail = document.createElement('li');
        NameDetail.innerHTML = 'Customername: ' + person.Name;
        CustomerList.appendChild(NameDetail);
    
        PhoneDetail = document.createElement('li');
        PhoneDetail.innerHTML = 'Phone Number: ' + person.Phone;
        CustomerList.appendChild(PhoneDetail);
    
        AdressDetail = document.createElement('li');
        AdressDetail.innerHTML = 'Adress: ' + person.Adress;
        CustomerList.appendChild(AdressDetail);

        EmailDetail = document.createElement('li');
        EmailDetail.innerHTML = 'Email: ' + person.Email;
        CustomerList.appendChild(EmailDetail); 

        EmailLink = document.createElement('a')
        EmailLink.setAttribute ("href", "mailto:" + person.Email);
        EmailLink.innerHTML = ' Mail now';
        EmailDetail.appendChild(EmailLink);

        Space = document.createElement('br');
        Space.innerHTML = ' ';
        CustomerList.appendChild(Space);
    });

    
}

Search = () => {
    var Search = document.getElementById('search');
    var outprint = document.getElementById('outprint');

   
    let find = Customers.find(person => person.EmailDetail);
    outprint.innerHTML = find;
}