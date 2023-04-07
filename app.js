 const btntogle = document.querySelector('.Toggle-btn')
 btntogle.addEventListener('click', function(){
    console.log('click')
    document.getElementById('Side-bar').classList.toggle('active');
    console.log(document.getElementById('Side-bar'))
    
 })