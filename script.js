form = document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    firstName = document.querySelector('#firstName')
    lastName = document.querySelector('#lastName')
    address = document.querySelector('#address')
    pincode = document.querySelector('#pincode')
    gender = document.querySelector('#gender')
    food = document.querySelector('#food')
    state = document.querySelector('#state')
    country = document.querySelector('#country')
    array = [firstName,lastName,address,pincode,gender,food,state,country]
    table_row = document.createElement('tr')
    count = 0;
    for(let i of array){
        if(i.value !=''){
            table_data = document.createElement('td')
            table_data.innerText = i.value
            table_row.append(table_data)
            count++
        }
    }

   if(count>2){
      document.querySelector('tbody').append(table_row)
       }else{
       alert("Must choose at least 2 out of 5 options")
        }
    for(let i of array){
        i.value=''
        }
})