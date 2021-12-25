export interface InputProps {
  handleUserInput: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  handleSearch: DebouncedFunc<() => void>;
  handleKeyDownEnter: (e: React.KeyboardEvent<HTMLDivElement>) => void
}
