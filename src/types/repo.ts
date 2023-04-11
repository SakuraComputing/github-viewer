export default interface IRepo {
    name: string;
    forks: number;
    stars: number;
}

export default interface IRepos {
    repos: IRepo[];
    error: string;
    loading: boolean;
}
