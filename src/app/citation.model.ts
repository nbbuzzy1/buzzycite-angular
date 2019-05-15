export class Citation {
  constructor (
    public fullCitation: string, 
    public createdAt: number,
    public createdAtDisplay: string,
    public type: string,
    public note: string
  ) {}
}