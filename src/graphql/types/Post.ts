interface Tag {
  _id: string;
  name: string;
}

export interface Post {
  _id: string;
  title: string;
  coverImage: string;
  totalReactions: number;
  brief: string;
  dateAdded: Date;
  slug: string;
  content: string;
  tags: Tag[];
}