export class TuyauHTTPError extends Error {
  constructor(
    public status: number,
    public data: unknown,
  ) {
    super(data + '')
    this.name = 'TuyauHTTPError'
  }
}
