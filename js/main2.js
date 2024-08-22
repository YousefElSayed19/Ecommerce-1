let parente =document.getElementById("carto")
let done1=document.querySelector(".done1")
let shodo1=document.querySelector(".shodo");

function addInCart(){
    number.innerHTML=arr.length
    for(let i=0;i<arr.length;i++){
        let table =`
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../${arr[i].img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Price :  ${arr[i].price}</h5>
                    <p class="card-text">Name : ${arr[i].name}</p>
                    <p class="card-text">Marka : <small class="text-body-secondary">${arr[i].marka}</small></p>
                </div>
                </div>
            </div>
        </div>`
        parente.innerHTML += table
    }
    parente.innerHTML += `<button class="btn clear btn-primary mt-5 me-4"  >Clear</button>`
    parente.innerHTML += `<button class="btn buy btn-success mt-5" >Buy All</button>`
}
addInCart()

let clear=document.querySelector(".clear");
let buy=document.querySelector(".buy");
clear.onclick=()=>{
    scroll({
        top:0,
    })
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed) {
        localStorage.clear()
        parente.innerHTML=''
        arr.length=0
        setTimeout(()=>{
            setTimeout(()=>{
                location.reload()
            },1000)
        },3000)
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
        });
    }
    });
}
buy.onclick=()=>{
    scroll({
        top:0,
    })
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
    localStorage.clear()
    parente.innerHTML=''
    arr.length=0
    setTimeout(()=>{
        setTimeout(()=>{
            location.reload()
        },1000)
    },3000)
}
