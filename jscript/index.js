document.getElementById("discover-st-new-today").addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = 'blog.html'
})

// bg-color change

document.getElementById("bg-color").addEventListener('click',function(event){
    event.preventDefault();
    // document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

})

// complete button

document.getElementById("complete").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete","complete-text");

})

document.getElementById("complete-2").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete-2","complete-text-2");
})
document.getElementById("complete-3").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete-3","complete-text-3")
})

document.getElementById("complete-4").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete-4","complete-text-4");
})
document.getElementById("complete-5").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete-5","complete-text-5")
})

document.getElementById("complete-6").addEventListener('click',function(event){
    event.preventDefault();
    completedButton("complete-6","complete-text-6");
    alert('Congrates!! You have completed all the current tasks.')
})


// clear history

document.getElementById("clear-history").addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("history").remove();
})