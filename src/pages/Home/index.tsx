import BotaoAdicionar from "../../components/BotaoAdicionar"
import BaraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/ListaDeTarefas"

const Home = () => (
  <>
    <BaraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
