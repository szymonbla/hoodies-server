export const isInputDataAlreadyExists = async (inputDataDto, inputModel): Promise<any> => {
  return await inputModel.findById(inputDataDto).exec()
}
