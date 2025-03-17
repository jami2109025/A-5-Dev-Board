function completedButton(id,text){
    alert('Board updated successfully');

    const taskAssign = document.getElementById("task-assign").innerText;
    const convertedTaskAssign = parseInt(taskAssign);

    const day = document.getElementById("day").innerText;
    const convertedDay = parseInt(day);

    document.getElementById("task-assign").innerText = convertedTaskAssign - 1;
    document.getElementById("day").innerText = convertedDay + 1;

    recordHistory(text);

    document.getElementById(id).disabled = 'true';
}



function recordHistory(id){
    const text = document.getElementById(id).innerText;
    const p = document.createElement('p');
    p.innerText = `You have completed the task ${text} at 1:35:01 AM`
    p.style.backgroundColor = 'lightYellow';
    p.style.borderRadius = '5px';
    document.getElementById("history").appendChild(p);
}