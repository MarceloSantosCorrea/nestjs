export interface Repository<I, O> {
  insert(input: I): O;
}
