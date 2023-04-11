export default interface IRepo {
    name: string;
    forks: number;
    stars: number;
    full_name: string;
}

export default interface IRepos {
    repos: IRepo[];
    error: string;
    loading: boolean;
}
