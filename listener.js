window.onload = function () {
    document.getElementById('btnSubmit')
        .addEventListener('click', function () {
            var xhr = new XMLHttpRequest();
            xhr.open('post','/addUser');
            xhr.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    var userList = JSON.parse(this.responseText);
                    var users = '<ul>';
                    userList.forEach(function(user){
                        users+='<li>'+user['username']+'</li>';
                    });
                    users+='</ul>';
                    document.getElementById('usersDiv').innerHTML = users;
                }
            }
            xhr.send('username='+document.getElementById('username').value+'&password='+document.getElementById('password').value);
        });
}