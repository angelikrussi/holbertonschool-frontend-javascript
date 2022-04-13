export default function guardrail(mathFunction){
  const newArray = [];
  try {
      newArray.push(mathFunction());
  }
  catch (erro) {
      newArray.push(erro.toString());
  }
  finally {
      newArray.push('Guardrail was processed');
  }
  return newArray;
}
