export default class PostFrontmatter {
  public title: string;
  public date: string;
  public slug: string;

  constructor({
    title,
    date,
    slug,
  }: {
    title: string;
    date: string;
    slug: string;
  }) {
    this.title = title;
    this.date = date;
    this.slug = slug;
  }
}
