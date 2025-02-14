export interface NewsItem {
    id: string;
    title: string;
    content: string;
    dateCreated: string;
    dateUpdated: string;
    cover: string
}

export interface SelectedFiles {
    china: File | null;
    kyrgyzstan: File | null;
}
  
export interface NewsProps {
    initialNews: NewsItem[];
}