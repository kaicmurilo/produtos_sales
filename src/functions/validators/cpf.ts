export function isCpfValid(cpf: string) {
  const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return re.test(cpf);
}
