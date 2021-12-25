export interface RadioGroupDemoProps {
  dataPerPage: number
  dataPerPageArr: number[]
  handleDataPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void
}
