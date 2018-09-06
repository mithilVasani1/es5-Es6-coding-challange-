


class GitHubUser {
    constructor (username) {
        this.username = username;  
    }

    fetchDetails = (cb) => {       
        cb = cb || function (){}; 
        if (this.userData) 
        {
            setTimeout( () => {
            cb(this.userData);
            }, 0);        

        }  else {
            fetch(`https://api.github.com/users/${this.username}`, {method: 'GET'})
            .then(
                (response) => {
                    response.json().then( (data) => {
                        this.data = data;
                        cb(data);
                  });
                } 
                );

        }

    }
 
 }; 

 var octocat = new GitHubUser('octocat');
 octocat.fetchDetails(function (data) {
	console.log(data);
});

