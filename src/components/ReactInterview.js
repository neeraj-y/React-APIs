import React, { useEffect, useState, Fragment }  from 'react';

const styles= {
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
}

function getGithubRepos() {
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}

const ReactInterview = () => {
    const [ repoList, setRepoList ] = useState(null);
    console.log('repoList', repoList);

    useEffect(() => {
        getGithubRepos()
            .then(response => response.map(({userId, title, body, id}) => {
                // throw new Error("Data fetch failed");
                return { userId, title, body, id }
            }))
            .then(repoList => setRepoList(repoList))
            .catch(() => setRepoList([]));
    }, []);

    return (
        <Fragment>
            {repoList === null ? (<h5 style={styles.loading}>Loading...</h5>) :
            (repoList.length > 0 ? 
                <table>
                    <tbody>
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Summary</th>
                        </tr>
                        {repoList.map((repo)  => {
                            return (
                                <Fragment key={repo.id}>
                                    <tr>
                                        <td>{repo.userId}</td>
                                        <td>{repo.title}</td>
                                        <td>{repo.body}</td>
                                    </tr>
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>: 
            <div style={styles.loading}>Error, please try again</div>)}
        </Fragment>
    )
}

export default ReactInterview;