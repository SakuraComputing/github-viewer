export default interface IRepo {
    name: string;
    forks: number;
    stars: number;
    htmlUrl: string;
}

export default interface IRepos {
    repos: IRepo[];
    error: string;
    loading: boolean;
}
