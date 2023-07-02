import { useSelector } from "react-redux"

import Tarefa from "../../components/Tarefa"
import { MainContainer, Titulo } from "../../styles/index"

import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFIltradas = itens
    if (termo !== undefined) {
      tarefasFIltradas = tarefasFIltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === "prioridade") {
        tarefasFIltradas = tarefasFIltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === "status") {
        tarefasFIltradas = tarefasFIltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFIltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ""
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ""
    if (criterio === "todas") {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontradada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
