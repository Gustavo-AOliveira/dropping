import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from '../pages/login/Login';
import { Cadastro } from "../pages/cadastro/Cadastro";
import { ProductManagement } from "../pages/menu/Menu";
import { CadProduto } from "../pages/cadProduto/CadProduto";
import { AtualizaProduto } from "../pages/atualizaProduto/AtualizaProduto";
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ < Home /> }/>
                <Route path="/login" element={ < Login /> }/>
                <Route path="/cadastro" element={ < Cadastro /> }/>
                <Route path="/menu" element={ < ProductManagement /> }/>
                <Route path="/cadProduto" element={ < CadProduto /> }/>
                <Route path="/atualizaProduto/:id" element={ < AtualizaProduto /> }/>
                <Route path="/*" element={ <h1>Página não encontrada</h1> }/>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };