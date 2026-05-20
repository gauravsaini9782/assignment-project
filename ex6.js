let getMostForkedRepo = async (username) => {

    try {

        if (!username) {
            throw "No username provided";
        }

        let url = `https://api.github.com/users/${username}/repos`;

        let res = await fetch(url);

        if (!res.ok) {
            throw "GitHub API error";
        }

        let repos = await res.json();

        if (!repos || repos.length === 0) {
            return "No repositories found";
        }

        let mostForked = repos[0];

        for (let i = 1; i < repos.length; i++) {

            if (repos[i].forks_count > mostForked.forks_count) {
                mostForked = repos[i];
            }
        }

        return {
            repo: mostForked.name,
            forks: mostForked.forks_count,
            stars: mostForked.stargazers_count,
            url: mostForked.html_url
        };

    } catch (err) {

        return {
            error: "Failed to fetch GitHub data",
            message: err
        };
    }
};
