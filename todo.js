document.getElementById('taskName').addEventListener('input', function() {
    key = document.getElementById('taskName').value;
});
document.getElementById('taskTime').addEventListener('input', function() {
    value = document.getElementById('taskTime').value;
});

const createTask = (key, value) => {
    localStorage.setItem(key,value);
};

// Event listener for the create button
document.querySelector('.cr').addEventListener('click', function() {
    const key = document.getElementById('taskName').value;
    const value = document.getElementById('taskTime').value;
    createTask(key, value);
});
altt=()=>{
    alert("Use the block which is below to store some value");
}
show=()=>{
    console.log(localStorage);
}
showone=()=>{
    let z=prompt("enter the name to be found");
    alert(localStorage.getItem(z));
}