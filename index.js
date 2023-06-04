console.log("test")

const content = document.querySelector('#content');

window.addEventListener('load', ()=>{
    getActors();
});


//Function for get actor
function getActors(){
    let html = "";
    
    fetch('http://localhost:5001/api/member',{mode:'cors'})
    .then(response =>{
        console.log(response);
        return response.json();

    }).then(data=>{
        //-------------Important Field---------------------//

        //Test to view fetch data
        console.log(data);

        //to show display in DOM HTML 
        data.forEach(element => {
            html += `<li>${element.first_name} ${element.last_name}</li>`;
        });

        content.innerHTML = html;

        //-------------------------------------------------//
    }).catch(error=>{
        console.log(error);
    });

};


//Function for Insert Actor 
submit.addEventListener('click',()=>{
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;

    let formData = {fname,lname};

    fetch ('http://localhost:5001/api/insert_member', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response =>{
        console.log(response);
        return response.json();

    }).then(data=>{
        //-------------Important Field---------------------//
        alert(data.msg);

        //-------------------------------------------------//
    }).catch(error =>{
       console.log(error);
    });

});