
// export default

 // данные клиента мы получаем от сервера, запишем его в константу (при смене сервера также удобно будет поменять его только в одном месте)
 const SERVER_URL = 'http://localhost:3000'


//  функция получения массива клиентов с сервера

async function serverGetClients(){
  // делаем добавление на сервер
  let response = await fetch (SERVER_URL + '/api/clients',{
    method:"GET",
    headers: {'Content-Type': 'aplication/json'},
   })

  //  получаем ответ от сервера
  let data = await response.json()
  return data
}

 // задаем функцию добавления нового клиента на сервер

 async function serverAddClient(obj) {
  // делаем добавление на сервер
   let response = await fetch (SERVER_URL + '/api/clients',{
    method:"POST",
    headers: {'Content-Type': 'aplication/json'},
    body:JSON.stringify()
   })

  //  получаем ответ от сервера
  let data = await response.json(obj)
  return data
 }





class Client {

 // ID клиента, заполняется сервером автоматически, после создания нельзя изменить
  get id(){

  }

   // * обязательное поле, имя клиента  и фамилия, отчество необязательно
  constructor (surname, name, lastName){
    this.surname = surname
    this.name = name
    this.lastName = lastName
  }

  get fio() {
    return this.surname + ' ' + this.name + ' ' + this.lastname
  }

// дата и время создания клиента, заполняется сервером автоматически, после создания нельзя изменить
  get createdAt(){

  }
// дата и время изменения клиента, заполняется сервером автоматически при изменении клиента
  get updatedAt(){

  }



    // контакты - необязательное поле, массив контактов
    // каждый объект в массиве (если он передан) должен содержать непустые свойства type и value
    contacts = [
      {
        type: 'Телефон',
        value: '+71234567890'
      },
      {
        type: 'Email',
        value: 'abc@xyz.com'
      },
      {
        type: 'Facebook',
        value: 'https://facebook.com/vasiliy-pupkin-the-best'
      }
    ]
  }
