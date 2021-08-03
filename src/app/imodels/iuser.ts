interface Icompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Igeo {
  lat: string;
  lng: string;
}

interface Iaddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;

}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: Iaddress;
  geo:  Igeo;
  phone: string;
  website: string;
  company:  Icompany
}
