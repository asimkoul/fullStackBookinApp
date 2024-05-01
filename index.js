async function handleFormSubmit(event){
    event.preventDefault();
    const userDetails = {
        name:event.target.name.value,
        email:event.target.email.value,
        phonenumber:event.target.phonenumber.value
    }
    try{
        const response = await axios.post(`http://localhost:3000/user`,userDetails)
        display(response.data);
        event.target.reset();
    }catch(error) {
        console.log(error)
    }
}
document.addEventListener('DOMContentLoaded',async ()=>{
    try {
        const response=await axios.get(`http://localhost:3000/user`)
        response.data.forEach(result => {
            display(result)
        });
    } catch (error) {
        
    }
})
function display(data) {
    const ul=document.querySelector('ul')
    const li= document.createElement('li')
    li.appendChild(document.createTextNode(
        `${data.name} - ${data.email} - ${data.phonenumber} `
    ))

    const deleteBtn=document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('DELETE'));
    deleteBtn.setAttribute('id', data.id)
    li.appendChild(deleteBtn)

    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.setAttribute('id', data.id)
    li.appendChild(editBtn)

    ul.appendChild(li)

    deleteBtn.addEventListener('click', () => {
        const id = deleteBtn.getAttribute("id");
        axios.delete(`http://localhost:3000/user/${id}`)
        .then(res => {
            ul.removeChild(li)
        })
        .catch((error) => {
            console.log(error)
        })

    });
    editBtn.addEventListener('click',async ()=>{
        const id = editBtn.getAttribute("id");
        try {
            const response=await axios.get(`http://localhost:3000/user/${id}`)
            const deleted=await axios.delete(`http://localhost:3000/user/${id}`)
            ul.removeChild(li)

                const user = response.data;
                
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                document.getElementById('phonenumber').value = user.phonenumber;
            
        } catch (error) {
            console.log(error)
        }
    });

}

