let designcl = ['work','personal','Claeaning','other','school'] //creating class for implementing design to different category 
window.addEventListener('load',()=>{
    // alert("window loaded");
    let categorys = document.getElementsByClassName('cbtn'); // getting all the class name category 
    for(let i=0;i<categorys.length;i++){ // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
    //   alert(categorys[i].innerHTML);
        if(categorys[i].innerHTML.trim()=='Work'){ 
           categorys[i].classList.add(designcl[0]);
        }
        else if(categorys[i].innerHTML.trim()=='personal'){
            categorys[i].classList.add(designcl[1])
        }else if(categorys[i].innerHTML.trim()=='cleanning'){
            categorys[i].classList.add(designcl[2])
        }else if(categorys[i].innerHTML.trim()=='other'){
            categorys[i].classList.add(designcl[3]);
        }else if(categorys[i].innerHTML.trim()=='School'){
            categorys[i].classList.add(designcl[4])
        
        }
    }


})
//marking-for delete
function onCheck(){
    let delete_check = document.getElementsByClassName('delete-check');
    let desc = document.getElementsByClassName('desc');
    let Checkdate = document.getElementsByTagName('p');
    for(let i=0; i<delete_check.length;i++){
       //check condition
       if(delete_check[i].checked){
        // console.log(delete_check[i].className);
        desc[i].style.textDecoration = 'line-through';
        Checkdate[i].style.textDecoration= 'line-through';
        
       }else{
        desc[i].style.textDecoration = 'none';
        Checkdate[i].style.textDecoration='none';
       }
    }
}

//delete-task
function deleteTask(){
    alert("delete click");
    let delete_Check = document.getElementsByClassName('delete-check');
    let removeTask=[]; //handle multi-task
    for(let i=0;i<delete_Check.length;i++){

        if(delete_Check[i].checked){ //check the task is checked or not
            console.log("delete:",delete_Check[i].getAttribute('uid'));
            removeTask.push(delete_Check[i].getAttribute('uid')); //store the id in array
        }
       
       
    }
    if(removeTask.length==0){
        alert("please select task for delete ");
        return;
    }
    $.ajax(
        {
            type:'post',
            url:`delete_todo/?id=${removeTask}`,
            success:()=>{
               alert("Item is deleted ", "click ok to go back Home ", "success") // using sweet alert to show the data is delete
                window.location='/';
            },
            error:(err)=>{
                console.log("error in ajax:",err);
            }
        }
    )

}


