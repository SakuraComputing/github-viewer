import { useEffect, useState } from "react";
import IRepos from '../types/repo'

function useFetch(url: string) {
  const [repos, setRepos] = useState<Array<IRepos>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredRepos, setFilteredRepos] = useState<Array<IRepos>>([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(response => response.json())
    .then(repos => {
        console.log(repos)
        setRepos(repos)
    })
    .catch((err) => {
    setError(err);
    })
    .finally(() => {
    setLoading(false);
    });
  }, [url]);

  const filterRepos = (filterText: string) => {
      let filterRepos = repos.filter(repo => repo.name.includes(filterText));

      setFilteredRepos(filterRepos); 

      return filteredRepos;
  };

  return { repos, loading, error, filteredRepos, filterRepos };
}

export default useFetch;
