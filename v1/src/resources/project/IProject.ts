export default interface IProject {
  title: string;
  shortDescription?: string;
  number?: string;
  techstack?: Array<string>;
  img: string | URL;
  inProgress: boolean;
}
