import PostFrontmatter from "./postFrontmatter";

export default class Post {
  public frontmatter: PostFrontmatter;
  public html: string;

  constructor({
    html,
    frontmatter,
  }: {
    html: string;
    frontmatter: PostFrontmatter;
  }) {
    this.frontmatter = frontmatter;
    this.html = html;
  }
}
